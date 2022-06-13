const faker = require('faker')

class VehiculoService{
    constructor(){
        this.vehiculo = []
        this.generate()
    }

    async generate(){
        const limit = 10
        for (let index = 0; index < limit; index++) {
            this.vehiculo.push({
                id: faker.datatype.uuid(),
                marca: faker.commerce.productName(),
                modelo: faker.commerces.productName(),
                año: faker.date(),
                image:faker.image.imageUrl(),
                price:parseInt(faker.commerce.price(),10),
            })
            
        }
    }

    async create(data){
        const newVehiculo = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.vehiculo.push(newVehiculo)
        return newVehiculo
    }

    async find (){
        return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(this.vehiculo)
            }, 2000);
        })
    }

    async findOne (id) {
        return this.vehiculo.find(item => item.id === id)
    }

    async update (id,changes){
        const index = this.vehiculo.findIndex(item => item.id === id)
        if (index ===- 1){
            throw new Error('Vehiculo not found')
        }
        const vehiculos = this.vehiculo[index]
        this.vehiculo[index]={
            ...vehiculos,
            ...changes
        }
        return this.vehiculo[index]
    }

    async delete(id){
        const index = this.vehiculo.findIndex(item => item.id === id)
        if(index === -1){
            throw new Error('vehiculo not found')
          }
        this.vehiculo.splice(index,1)
        return {id}
    }
}

module.exports = VehiculoService