const faker = require('faker');

class EnviosService {
constructor () {
    this.envios = [];
    this.generate();

}
generate () {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
        this.envios.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            email: faker.email.findEmail(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country(),
            date: faker.date.past(),
            total: faker.commerce.price(),
        })

    }
}
async create (data) {
    const newEnvio = {
        id: faker.random.uuid(),
        ...data
    }
    this.envios.push(newEnvio)
    return newEnvio
}
async findOne (id) {
    const envio = this.envios.find(item => item.id === id);
    if (!envio) {
        throw boom.notFound('envio no encontrado, verifique su información');
    }
    return envio;
}
async update (id, changes) {
    const index = this.envios.findIndex(item => item.id === id);
    if (index === -1) {
        throw boom.notFound('envio no encontrado');
    }
    const envio = this.envios[index];
    this.envios[index] = {
        ...envio,
        ...changes
    };
    return this.envios[index];
}
async delete (id) {
    const index = this.envios.findIndex(item => item.id === id);
    if (index === -1) {
        throw boom.notFound('envio no encontrado');
    }
    const envio = this.envios[index];
    this.envios.splice(index, 1);
    return envio;
}
}
module.exports = EnviosService;