const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
router.get('/', (req, res) => {
  controller
    .getTodos()
    .then(todos => {
      response.success(req, res, todos, 200)
    })
    .catch(e => {
      response.error(req, res, 'no data ', 500, e)
    })
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const { user, pass, pass1 } = req.body
  // controller
  //   .addUser(user, pass)
  //   .then(user => {
  //     res.status(200)
  //     console.log('[USER]: ', user)
  //     // response.success(req, res, user, 200)
  //   })
  //   .catch(e => {
  //     response.error(req, res, 500, e)
  //   })
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
})

router.put('/:id', (req, res) => {
  console.log('[BODY]', req.body)
  console.log('[ID]', req.params.id)
})

router.delete('/:id',  (req, res) => {
  console.log('[DELETE]: ',req.params.id)
  try {
    const id = req.params.id

    controller.borrarUser(id)
  } catch (error) {
    console.log(error)
  }
  res.redirect('http://localhost:8080')
})

module.exports = router
