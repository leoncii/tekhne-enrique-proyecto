import React, { useState, useEffect } from 'react'
import FetchCustom from '../FetchCustom'

const CustomTable = props => {
  const [customs, setCustoms] = useState({
    // id: props.id,
    calorias: '',
    comidas: '',
    ejercicios: '',
  })

  const handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    })
    setCustoms({
      ...customs,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form
      action={`http://localhost:3000/configurar/${props.id}`}
      onSubmit={handleChange}
      method='post'
      id='formCustom'
    >
      <fieldset>
        <legend>Custom : {props.user.user}</legend>
        <table>
          <thead>
            <tr>
              <th>Calorias</th>
              <th>Comida</th>
              <th>Ejercicio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <input
                  type='text'
                  name='calorias'
                  onChange={handleChange}
                  value={customs.calorias}
                />
              </th>
              <th>
                <input
                  type='text'
                  name='comidas'
                  onChange={handleChange}
                  value={customs.comidas}
                />
              </th>
              <th>
                <input
                  type='text'
                  name='ejercicios'
                  onChange={handleChange}
                  value={customs.ejercicios}
                />
              </th>
              <th>
                <button type='submit'>
                  <a>hacer clic</a>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>{customs.calorias}</th>
              <th>{customs.comidas}</th>
              <th>{customs.ejercicios}</th>
            </tr>
          </thead>
        </table>
        {customs.calorias == '' && (
          <div>
            <FetchCustom customs={customs} id={props.id} />
          </div>
        )}
      </fieldset>
    </form>
  )
}

export default CustomTable
