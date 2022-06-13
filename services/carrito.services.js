const faker = require('faker')

class carritoCsService{

    constructor(){
        this.carritoCs = []
        this.generate()
      }
    
async generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.carritoCs.push({

        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        priceTotal: parseInt(faker.commerce.price(),10),
        priceIva: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
      })

    }

  }


  async create(data){
    const newcarrito = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.carritoCs.push(newcarrito)
    return newcarrito
  }

  async find(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.carritoCs)
      }, 5000);
    })
  }


  async findOne(id){
    return this.carritoCs.find(item => item.id === id)
  }


  async update(id,changes){
    const index = this.carritoCs.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product not found')
    }
    const carrito = this.carritoCs[index]
    this.carritoCs[index]={
      ...carrito,
      ...changes
    }

    return this.carritoCs[index]
  }


  async delete(id){
    const index = this.carritoCs.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product not found')
    }
    this.carritoCs.splice(index,1)
    return {id}
  }
}
module.exports = carritoCsService



