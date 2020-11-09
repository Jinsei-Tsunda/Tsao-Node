const express = require('express')
const router = express.Router()

const db = require(__dirname + '/../db_connect')

router.get('/api/cart', async (req, res) => {
  await db.query('SELECT * FROM tsao_products').then(([results]) => {
    res.json(results)
  })
})

module.exports = router
