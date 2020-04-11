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
    }
    return store.añadirUser(usuario)
  }
}

function borrarUser(id) {
  return new Promise((res, rej) => {
    if (!id) {
      rej('No id')
  }
  store.borrar(id).then(() => res())
    //  return store.borrar(id)
  })
}
module.exports = {
  addUser,
  getTodos,
  borrarUser
}
