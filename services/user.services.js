const faker = require('faker');
const boom = require('@hapi/boom');

class   UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.random.uuid(),
        name: faker.name.findName(),
        nickname: faker.internet.userName(),
        email: faker.internet.email(),
        image: faker.image.imageUrl(),
      })

    }
  }

  async create(data){
    const newUser = {
      id: faker.random.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  async findOne(id){
    const user = this.products.find(item => item.id === id);
    if (!user){
      throw boom.notFound('user not found, please check your information');
    }
    if(user.isBlock){
      throw boom.conflict('user not found, maybe are blocked');
    }
    return user;
    }

  async update(id, changes){
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1){
        throw boom.notFound('user not found');
      }
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes
      };
      return this.users[index];
    }
  
    async delete(id){
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1){
        throw boom.notFound('user nor found, please check your information');
      }
      this.users.splice(index, 1);
      return { id };
    }
  }
