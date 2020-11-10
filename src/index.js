const express = require('express')
const session = require('express-session')

//web server
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//app use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//api router
const cartRoutes = require(__dirname + '/routes/cartRoutes')
app.use('/api', cartRoutes)

//route
app.get('/', (req, res) => {
  res.send('123')
})

//static folder
app.use(express.static(__dirname + '/../public'))

//404
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 Not Found')
})

//server listen
app.listen(3000, () => {
  console.log('server started, port 3000...')
})
