const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`此路徑是: /api`)
})

module.exports = router
