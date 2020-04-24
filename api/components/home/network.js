const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')
const multer = require('multer')
const fs = require('fs')
const Model = require('./model')
const upload = multer({
  dest: './uploads',
})
router.get('/', (req, res) => {
  controller
    .getTodos()
    .then(todos => {
      response.success(req, res, todos, 200)
    })
    .catch(e => {
      response.error(req, res, e)
    })
})

router.get('/:table', (req, res) => {
  const table = req.params.table

  try {
    controller.getTodos().then(todos => {
      res.status(200).render('home', {
        data: todos,
        title: '***********',
      })
    })
  } catch (error) {
    response.error(req, res, data, 200)
    console.log()
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const id = req.params.id || false
  const { user, pass, pass1 } = req.body
  if (!id) {
    try {
      const newUser = await controller.addUser(
        user,
        pass,
        pass1,
      )
      console.log('[NEWUSER]: ', newUser)
      res.status(201)
      res.redirect('localhost:8080')
      // res.setHeader('content-type', 'text/html')
    } catch (error) {
      console.log(error)
      res.status(500).redirect('google.com')
    }
  }

  console.log('[HAY ID]: ', id)
  try {
    const resBorrado = await controller.borrarUser(id)
    console.log('USUARIO BORRADO SSR:', resBorrado)
  } catch (error) {
    console.log('[ERROR DE LA ReD]: ', error)
  }
  res.redirect('http://localhost:8080')
})

router.put('/:id', (req, res) => {
  controller
    .actualizarUser(req.params.id, req.body)
    .then(function(data) {
      // console.log('DATAAAAAA', data)
      res.send({
        hola: 'Hola desde el network',
      })
    })
})

router.patch(
  '/:id',
  upload.single('avatar'),
  async (req, res) => {
    console.log('[File]: ', req.params.id)
    const id = req.params.id
    console.log('ESTAMOS EN EL PATCH')
    const myImg = new Model()
    myImg.img.data = fs.readFileSync(req.file.path)
    myImg.img.contentType = 'image/jpg'
    const myUser = await Model.findOne({ _id: id })
    myUser.img = myImg
    console.log('-------------------')
    console.log(myImg)
    console.log('-------------------')
    await myUser.save()
    res.send({
      yolo: 'estamos en el patch',
    })
  },
)

router.delete('/:id', (req, res) => {
  console.log('[DELETE]: ', req.params.id)
  console.log('[DELETE]: ', req.body)
  try {
    const id = req.params.id

    controller.borrarUser(id)
  } catch (error) {
    console.log(error)
  }
  res.redirect('http://localhost:8080')
})

// router.get('/:id', (req, res) => {
//   console.log('****************************')
//   console.log(req.params.id)
//   console.log('****************************')

//   res.send({
//     id: req.params.id,
//   })
// })

module.exports = router
