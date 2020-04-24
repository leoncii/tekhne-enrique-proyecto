const Model = require('./model')

async function getUsers() {
  const users = await Model.find()
  return users
}

function añadirUser(usuario) {
  const user = new Model(usuario)
  return user.save()
}

function borrar(id) {
  return Model.deleteOne({ _id: id })
}

async function actualizar(id, user) {
  console.log('--------------')
  console.log('[PARAMS]: ', id)
  console.log(user)
  console.log('++++++++++++')

  let myUserFound = await Model.findByIdAndUpdate(id, {
    $set: user,
  })
  return myUserFound
}

module.exports = {
  getUsers,
  añadirUser,
  borrar,
  actualizar,
}
