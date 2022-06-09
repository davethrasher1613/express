const express = require('express')
const productRouter = require('./products')
const categoriesRouter = require('./categories')
const userRouter = require('./users')
const carritoCsRouter = require('./carritoCs')



function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productRouter)
  router.use('/categories',categoriesRouter)
  router.use('/users',userRouter)
  router.use('/carritoC',carritoCsRouter)
}

module.exports = routerApi