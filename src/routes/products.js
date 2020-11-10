const express = require('express')
const app = express()
const router = express.Router()

const db = require(__dirname + '/../db_connect')

router.get('/', async (req, res) => {
  const output = {}

  await db.query('SELECT * FROM tsao_products')
  output = res.json(results)
  console.log(output)
})

module.exports = router
