const express = require('express')
const productRouter = require('./products')
const categoriesRouter = require('./categories')
const userRouter = require('./users')
<<<<<<< HEAD
=======
const carritoCsRouter = require('./carritoCs')
>>>>>>> 70905c7063fb8f176f5faa2151ade79f931dd566



function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productRouter)
  router.use('/categories',categoriesRouter)
  router.use('/users',userRouter)
<<<<<<< HEAD
=======
  router.use('/carritoC',carritoCsRouter)
>>>>>>> 70905c7063fb8f176f5faa2151ade79f931dd566
}

module.exports = routerApi