const express = require('express')
const session = require('express-session')

//web server
const app = express()

const cartRoute = require(__dirname + '/routes/cartRoute')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/cart', cartRoute)

//route
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/cart', (req, res) => {})

//static folder
app.use(express.static(__dirname + '/../public'))

//server listen
app.listen(3000, () => {
  console.log('server started, port 3000...')
})
