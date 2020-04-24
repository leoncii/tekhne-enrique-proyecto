const express = require('express')
const router = express.Router()
const controller = require('./controller')
// const response = require('../../network/response')

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  controller
    .getCustoms(id)
    .then(customs =>
      // res.status(200)
      // res.status(200).redirect('/')
      res.status(200).send({
        data: customs,
      }),
    )
    .catch(e =>
      res.status(500).send({
        erro: 'GET PERFIL DATA ERROR!!!!',
        data: '',
      }),
    )
})

router.post('/:id', async (req, res) => {
  // const { comida, calorias } = req.body
  const id = req.params.id
  console.log('[RQ_BODY-CUSTOM]: ', req.body)
  // console.log('[CALORIAS]: ', calorias)
  try {
    const newCustomUser = await controller.customUser(
      id,
      req.body,
    )
    res.status(201)
    res.redirect('http://localhost:8080')
    // .send({
    //   error: '',
    //   res: 'usuario custom posteado',
    // })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
})

module.exports = router
