const express = require('express')
const productRouter = require('./products')
const categoriesRouter = require('./categories')
const userRouter = require('./users')
const envioRouter =require('./envios')



function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productRouter)
  router.use('/categories',categoriesRouter)
  router.use('/users',userRouter)
  router.use('/envios',envioRouter)
}

module.exports = routerApi
