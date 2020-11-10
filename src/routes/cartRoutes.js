const express = require('express')
const app = express()
const router = express.Router()

const products = require(__dirname + '/products')

app.use('/cart', products)

router.get('/', (req, res) => {
  res.send('123')
})

module.exports = router
