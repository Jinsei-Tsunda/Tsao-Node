const express = require('express')
const session = require('express-session')

//web server
const app = express()

//api router
const apiIndex = require(__dirname + '/routes/cartRoutes')
app.use('/api', apiIndex)
apiIndex.get('/cart', (req, res) => {})

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
