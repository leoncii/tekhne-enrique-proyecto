const store = require('./store')

// function updateUser(id, body) {
//   return new Promise(async (resolve, reject) => {
//     if (!id) {
//       reject('No hay id')
//     }

//     const respuesta = store.update(id, body)
//     resolve(respuesta)
//   })
// }
function getCustoms(id) {
  return new Promise(async (resolve, reject) => {

    if (!id) {
      reject('No hay id CONTROLLER[]')
    }

    const res = await store.getCustomPerfil(id)
    // console.log('resSsssssssssssssssssssss:', res)
    resolve(res)
  })
}

function customUser(id, bodyCustom) {
  let { comidas, calorias, ejercicios } = bodyCustom
  return new Promise(async (resolve, reject) => {
    if (!bodyCustom) {
      reject('NO HAY COMIDA o CALORIAS')
    }

    const newCustomUser = {
      user: id,
      comidas: comidas,
      calorias: calorias,
      ejercicios: ejercicios,
      date: new Date(),
    }

    const res = await store.storeCustomUser(newCustomUser)
    resolve(res)
  })
}

module.exports = {
  // updateUser,
  customUser,
  getCustoms,
}
