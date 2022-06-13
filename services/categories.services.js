const faker = require('faker')
class CategoriesService{

  constructor(){
    this.categories = []
    this. generate
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({

        id: faker.datatype.uuid(),
        nombre: faker.commerce.nombreName(),
       
       
        
      })

    }
  }

  create(){
    const newCategory = {
      
    }
  }

  find(){
    return this.categories
  }

  findOne(id){
    return this.categories.find(item=>item.id === id)
  }
}

module.exports = CategoriesService
