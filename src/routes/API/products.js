const express = require('express')
const db = require(__dirname + '/../../db_connect')

const router = express.Router()

router.get('/api/cart-item', async (req, res) => {
  let sql = `SELECT * FROM tsao_products ORDER BY sid ASC`
  const output = {}
  const [i] = await db.query(sql)

  output = i.json()
})

module.exports = router
