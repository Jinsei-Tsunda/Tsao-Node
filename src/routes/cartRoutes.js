const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const db = require(__dirname + '/../db_connect')

router.get('/', (req, res) => {
  res.send('123')
})

router.get('/cart', (req, res) => {
  db.query('SELECT * FROM tsao_products').then(([results]) => {
    res.json(results)
  })
})
router.get('/delivery-addr', (req, res) => {
  db.query('SELECT id, name, addressCode, addressString FROM members').then(
    ([results]) => {
      res.json(results)
    }
  )
})

// router.post('/order', jsonParser, (req, res) => {
//   // const data = { ...req.body }
//   // data.Order_CreatedTime = new Date()

//   //INSERT INTO `Order_Info`(`Order_id`, `Order_State`, `Order_code`, `Member_id`, `Member_name`, `Order_name`, `Order_mobile`, `Order_deliver_type`, `Order_deliver_store`, `Order_package_id`, `Order_address`, `Order_pay`, `Order_CreatedTime`, `Order_Amount`, `Order_TotalPrice`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13],[value-14],[value-15])

//   //
//   const a = [
//     {
//       Order_id: null,
//       Order_State: 2,
//       Order_code: '20043UUSCCKK',
//       Member_id: 1,
//       Menber_name: 'Bunny',
//       Order_name: 'Bunny',
//       Order_mobile: '0912345678',
//       Order_deliver_type: 'e',
//       Order_deliver_store: null,
//       Order_package_id: 'SALT00002',
//       Order_address: '台北市大安區忠孝東路四段45號',
//       Order_pay: 'e20',
//       Order_CreatedTime: null,
//       Order_Amount: 3,
//       Order_TotalPrice: 1500,
//     },
//   ]
//   const data = JSON.stringify(a)
//   data.Order_CreatedTime = new Date()

//   const sql = 'INSERT INTO `Order_Info` SET ?'
//   // const sql =
//   //   'INSERT INTO Order_Info SET Order_id = null Order_State = 2 Order_code = `20043UUSCCKK` Member_id = 1 Menber_name = `Bunny` Order_name = `Bunny` Order_mobile = `0912345678` Order_deliver_type = `a` Order_deliver_store = `大安門市` Order_package_id = `SAFE00002` Order_address = `台北市大安區忠孝東路四段45號` Order_pay = `a20` Order_CreatedTime = null Order_Amount = 2 Order_TotalPrice = 700'

//   db.query(sql, [data]).then(res.json())
//   // db.query(sql).then(res.json())
// })

// router.post('/order-detail', (req, res)=>{
//   db.query(
//     'INSERT INTO Order_Detail'
//   )
// })

module.exports = router
