const faker = require('faker')
class CategoriesService{

  constructor(){
    this.categories = []
    this. generate
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({

        id: faker.datatype.uuid(),
        name: faker.commerce.productName()
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

  findOne(categoryId,productId){
    return this.categories.find(item=>item.categoryId === categoryId, item2 =>item2.productId===productId)
  }
}

module.exports = CategoriesService
