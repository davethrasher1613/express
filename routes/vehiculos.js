const express=require('express');
const faker=require('faker');
const router=express.Router();

router.get('/', (req,res) => {
    const vehiculos =  []
    const {size} = req.query
    const limit = size || 10
    for (let index = 0; index < limit; index++) {
        vehiculos.push({
            id: faker.datatype.uuid(),
            marca: faker.commerce.productName(),
            modelo: faker.commerce.productName(),
            //color: faker.color(),
            image: faker.image.imageUrl(),
        })
    }

    res.json(vehiculos)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    if (id===999) {
        res.status(404).json({
            message: 'not found',
        })
    } else {
        res.json({
            id,
            name: "Carro 1",
            price: 30000,
        })
    }
})

router.post('/', (req, res) => {
    const body = req.body
    res.status(201).json({
        message: 'Vehiculo creado',
        data: body
    })
})

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    res.json({
      message:'update',
      data:body,
      id,
    });
});
  
  
router.delete('/:id',(req,res)=>{
  const {id}=req.params;
  res.json({
    message:'deleted',
    id,
  });
});
  
  
module.exports=router;