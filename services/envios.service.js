
const faker= require('faker');

const boom=require('@hapi/boom')





class Envioservice{
constructor(){

  this.envios=[]
  this.generate()
}

generate(){

  const limit=  100


  for (let index = 0; index <limit; index++) {

    this.envios.push({
id:faker.datatype.uuid(),
nombres: faker.name.findName(),
ciudad:faker.addres.city(),
preciodeenvio:parseInt(faker.commerce.price(),10),
direccion:faker.address.direction(),
 telefono:faker.phone.phoneFormats(),
 imagen: faker.image.imageUrl(),


isBlock: faker.datatype.boolean(),


    })

  }

}



async create(data){

const newenvio={

  id:faker.datatype.uuid(),
  ...data
}
this.envios.push(newenvio)
return newenvio

}






async find(){

  return new Promise((resolve,reject)=>{

  setTimeout(() => {
  resolve(this.envios)
    }, 5000);
   })
  }

  async findone(id){
   // const name= this.getTotal()

  const envios=this.envios.find(item=>item.id===id)
  if(!envios){

   throw  boom.notFound('envio no encontrado')
  }
  if(envios.isBlock){

    throw  boom.conflict('envio bloqueado')
  }
return envios
  }




async update(id,changes){

const index= this.envios.findIndex(item=> item.id===id)

if (index=== -1){


throw boom.notFound('envio no encontrado')

}
const envios=this.envios[index]
this.envios[index]={

  ...envios,
  ...changes
}
return this.envios[index]
}


async delete(id){
  const index= this.envios.findIndex(item=> item.id===id)

  if (index=== -1){
throw boom.notFound('envio no encontrado')
  }
  this.envios.splice(index,1)
 this.envios[index]
  return {id }
}

}



module.exports=enviosservice
