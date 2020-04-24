const Model = require('./model')

// async function update(id, body) {
//   const userFound = await Model.findOne({ _id: id })
//   console.log('[BODYYYYYY]: ', body)
//   console.log('[USERFOUND]:', userFound)
//   userFound.body = body
//   const actualizadoUser = await userFound.save()
//   return actualizadoUser
// }

async function getCustomPerfil(id) {
  const perfil = await Model.find({ user: id })
  // console.log('[PERFIL]:', perfil)
  return perfil
}

async function storeCustomUser(newCustomUser) {
  const myCustomUser = new Model(newCustomUser)
  await myCustomUser.save()
}
module.exports = {
  // update,
  getCustomPerfil,
  storeCustomUser,
}
