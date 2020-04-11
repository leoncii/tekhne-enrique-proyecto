const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')

const db= require('./db')

// const router = require('./backend/components/message/network')
const router = require('./api/network/routes')

db('mongodb+srv://proyecto:proyecto1234@cluster0-yfxun.mongodb.net/proyecto')
app.use(cors())
//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(router)

app.use('/app', express.static('public'))
router(app)


app.listen(3000, () => console.log('Puerto 3000'))
