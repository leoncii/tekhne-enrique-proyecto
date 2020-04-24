const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./db')

const router = require('./api/network/routes')
db(
  'mongodb+srv://proyecto:proyecto1234@cluster0-yfxun.mongodb.net/proyecto',
)
const cors = require('cors')

const app = express()

app.set('views', path.join(__dirname, './api/views'))
app.set('view engine', 'pug')

app.use(cors())
//bodyparser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
// app.get('/:id/configurar',(req,res) => {
//   res.send('holaa')
// })
router(app)

app.use('/', express.static('src'))
// app.use(router)

app.listen(3000, () => console.log(' Puerto 3000 '))
