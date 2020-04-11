import React, { useState } from 'react'
import { set } from 'mongoose'

const Login = () => {
  const [logUser, setLogUser] = useState({
    user: '',
    pass: '',
    pass1:''
  })
  const handleSubmit = e => {
    // e.preventDefault()
    console.log(logUser)
    const input = document.getElementById('form')
    input.reset()
  }

  const handleClick = e => {
    console.log('click')
    // console.log("[input]",input.node)

    // logUser = {
    //   value: e.target.value,
    //   name: e.target.value,
    // }
  }

  const handleChange = e => {
    e.persist()
    console.log({
      nombre: e.target.value,
      id: e.target.name,
    })
    setLogUser(logUser => ({
      ...logUser,
      [e.target.name]: e.target.value,
    }))
    // console.log({
    //   value: e.target.value,
    //   name: e.target.name,
    // })
  }

  return (
    <form action='http://localhost:3000/' onSubmit={handleSubmit} method="post" id='form'>
      <div className='container'>
        <h3>Usuario</h3>
        <input
          onChange={handleChange}
          type='user'
          name='user'
          id='user'
          value={logUser.user}
          autoFocus
        />
      </div>
      <div>
        <h3>Contraseña</h3>
        <input
          onChange={handleChange}
          type='pass'
          name='pass'
          id='pass'
          value={logUser.pass}
        />
        <input
          onChange={handleChange}
          type='pass1'
          name='pass1'
          id='pass1'
          value={logUser.pass1}
        />
      </div>
      <button onClick={handleClick}> Submit </button>
    </form>
  )
}

export default Login
