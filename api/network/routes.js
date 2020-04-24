const express = require('express')

const message = require('../components/message/network')
const home = require('../components/home/network')
const configurarUser = require('../components/configurar')

const routes = function(app) {
  app.use('/message', message)
  app.use('/configurar', configurarUser)
  app.use('/', home)
}

module.exports = routes
