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
  // return Model.remove({ _id: id })
  // const borrado =  await Model.deleteOne({ _id: id })
  // return borrado
}

module.exports = {
  getUsers,
  añadirUser,
  borrar,
}
