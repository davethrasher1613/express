const express=require('express');
const products = require('./products');
const users=require('./users')
const vehiculo=require('./vehiculos')
function routerApi(app) {
  const router=express.Router();
  app.use('/api/v1', router);
  router.use('/products',products);
  router.use('/users',users);
  router.use('/vehiculos',vehiculo);
}
module.exports = routerApi;