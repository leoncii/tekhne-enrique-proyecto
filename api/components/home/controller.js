const store = require('./store')

function getTodos() {
  return new Promise((res, rej) => {
    res(store.getUsers())
  })
}

function addUser(user, pass, pass1) {
  if (pass !== pass1) {
    console.log('pass!==pass1: ', {
      p1: pass,
      p2: pass1,
    })
    return new Error('Contraseñas invalidas')
  } else {
    const usuario = {
      user: user,
      pass: pass,
      date: new Date(),
    }
    return store.añadirUser(usuario)
  }
}

function verificarUser(body) {
  const user = {
    name: body.user,
    password: body.pass,
  }
}

function borrarUser(id) {
  return new Promise((res, rej) => {
    if (!id) {
      rej('No id')
    }
    store.borrar(id).then(() => res())
    console.log('[CONTROLLER] DELETE')
    //  return store.borrar(id)
  })
}

async function actualizarUser(id, user) {
  // return new Promise(async (resolve, reject) => {
    //   if (!id || !user) {
    //     reject('No hay id [ACTUALIZAR USER HOME]')
    //   }
    const res = await store.actualizar(id, user)
    return res
    // return res
    // console.log('[][][][][][][][]')
    // console.log(res)
    // console.log('[][][][][][][][]')
    // resolve(res)
  // })
}
module.exports = {
  addUser,
  getTodos,
  borrarUser,
  actualizarUser,
}
