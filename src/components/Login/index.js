import React, { useState, useEffect } from 'react'
import { set } from 'mongoose'
import { Form } from './styles'
import { formImage } from '../../images/form-image.js'
import { Image } from '../../images/form-image'

const Login = () => {
  const [logUser, setLogUser] = useState({
    user: '',
    pass: '',
    pass1: '',
  })

  const handleSubmit = e => {
    setTimeout(() => {
      limpiarFormulario()
    }, 0)

    function limpiarFormulario() {
      document.getElementById('user').value = ''
      document.getElementById('pass').value = ''
      document.getElementById('pass1').value = ''
    }
  }

  const handleClick = e => {
    console.log('click')

    // setTimeout(() => {
    // setLogUser({
    //   user: '',
    //   pass: '',
    //   pass1: '',
    // })
    // }, 0)
  }

  const handleChange = e => {
    e.persist()
    // console.log({
    //   nombre: e.target.value,
    //   id: e.target.name,
    // })

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
    <Form
      action='http://localhost:3000/'
      onSubmit={handleSubmit}
      method='post'
      id='form'
    >
      <fieldset>
        <legend>Registrar</legend>
        <div>
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
            <h3>Repetir Contraseña</h3>
            <input
              onChange={handleChange}
              type='pass1'
              name='pass1'
              id='pass1'
              value={logUser.pass1}
            />
          </div>
          <button type='submit' onClick={handleClick}>Submit</button>
        </div>
      </fieldset>
    </Form>
  )
}

export default Login
