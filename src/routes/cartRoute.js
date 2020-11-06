const express = require('express')
const db = require(__dirname + '/../db_connect')

const app = express()
const products = require(__dirname + '/API/products')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//

module.exports = app
