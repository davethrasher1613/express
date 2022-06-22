const faker = require('faker')
//const boom = require('@hapi/boom')

class VehiculoService{

    constructor(){
        this.vehiculos = []
        this.generate()
    }

    generate(){
        const limit = 100
        for (let index = 0; index < limit; index++) {
            this.vehiculos.push({
                id: faker.datatype.uuid(),
                marca: faker.commerce.productName(),
                modelo: faker.commerce.productName(),
                //color: faker.color(),
                image: faker.image.imageUrl(),
            })
            
        }
    }

    async create(data){
        const newVehiculo = {
            id: faker.random.uuid(),
            ...data
        }
        this.vehiculos.push(newVehiculo)
        return newVehiculo
    }

    async find(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.vehiculos)
            }, 3000);
        })
    }

    async findOne(id){
        return this.vehiculos.find(item => item.id === id)
    }

    async update(id,changes){
        const index = this.vehiculos.find(item => item.id === id)
        if (index === -1) {
            throw new Error ('Vehiculo no encontrado')
        }
        const vehiculo = this.vehiculos[index]
        this.vehiculos[index] = {
            ...vehiculo,
            ...changes
        }
        return this.vehiculos[index]
    }

    async delete(id){
        const index = this.vehiculos.findIndex(item => item.id === id)
        if (index === -1) {
            throw new Error ('Vehiculo no encontrado')
        }
        this.vehiculos.splice(index,1)
        return {id}
    }
}

module.exports = VehiculoService