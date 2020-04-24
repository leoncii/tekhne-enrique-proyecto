import React, { useState, useEffect } from 'react'
import { Form, Form1 } from './styles'
import Cargando from '../Cargando'
import CustomTable from './CustomTable'
import axios from 'axios'

export const ConfigurarUser = props => {
  console.log('[][][][][]]][][][]')
  const [custom, setCustom] = useState('')
  let [myUser, setMyUser] = useState({
    fix: '',
    user: '',
    pass: '',
    twitter: '',
    facebook: '',
    gmail: '',
  })
  const id = props.match.params.id

  const fetchData = () => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(function(data) {
        let filteredUser = data.body.filter(
          item => item._id == id,
        )
        // console.log('FILTERED USER: ', filteredUser)
        setMyUser(myUser => ({
          ...myUser,
          fix: '',
          user: filteredUser[0].user || '',
          pass: filteredUser[0].pass || '',
          twitter: filteredUser[0].twitter || '',
          gmail: filteredUser[0].gmail || '',
          facebook: filteredUser[0].facebook || '',
        }))
      })
      .catch(e => console.log('[ERROR FETCH]', e))
    // console.log('[USUARIOS]: ', usuarios)
  }

  useEffect(() => {
    try {
      fetchData()
      // console.log('[OBJETO TRY]:', obj)
    } catch (error) {
      console.log('[ERROR DEL USEEFFECT]', error)
    }
  }, [])

  const handleChange = e => {
    // e.preventDefault()
    e.persist()

    // console.log('[MY USER change]:', {
    //   ...myUser,
    //   [e.target.name]: e.target.value,
    // })
    setMyUser(myUser => ({
      ...myUser,
      [e.target.name]: e.target.value,
    }))
  }

  const handleActualizar = e => {
    // e.persist()
    // console.log('click')
    // console.log('[MY USER]: ', myUser)
    fetch(`http://localhost:3000/${id}`, {
      method: 'put',
      mode: 'cors',
      body: JSON.stringify(myUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  function fetchCustomUsers() {
    fetch(`http://localhost:3000/configurar/${id}`)
      .then(res => res.json())
      .then(data => setCustom(data))
  }

  useEffect(() => {
    fetchCustomUsers()
  }, [])

  let da = custom == '' ? '' : console.log('[DA]: ', custom)

  const handleClic = e => {
    console.log('clic handleClic')
  }
  const handleFile = e => {
    axios
      .patch(`http://localhost:3000/${id}`)
      .then(res => console.log('[file PATCH]: ', res))
  }

  // const tableUser = myUser.user == '' ? false : true

  return (
    <div>
      <h2>CONFIGURACION</h2>
      {myUser.user.length < 2 ? (
        <Cargando />
      ) : (
        <div>
          <fieldset>
            <div>
              <legend>
                Datos de <h1>{myUser.user}</h1>{' '}
              </legend>
              <input
                type='text'
                name='user'
                // id='user'
                value={myUser.user}
                onChange={handleChange}
              ></input>
              <p>Password: </p>
              <input
                type='text'
                name='pass'
                // id='pass'
                value={myUser.pass}
                onChange={handleChange}
              />
              <p>Gmail: </p>
              <input
                type='text'
                name='gmail'
                // id='gmail'
                value={myUser.gmail}
                onChange={handleChange}
              />
              <p>Twitter: </p>
              <input
                type='text'
                name='twitter'
                // id='twitter'
                value={myUser.twitter}
                onChange={handleChange}
              />
              <p>Facebook: </p>
              <input
                type='text'
                name='facebook'
                // id='facebook'
                value={myUser.facebook}
                onChange={handleChange}
              />
              <button onClick={handleActualizar}>
                <a href='/'>Actualizar datos de</a>
              </button>
            </div>
            {/* <form
              action={`http://localhost:3000/${id}`}
              method='patch'
              encType='multipart/form-data'
            > */}
            <button
              onClick={() => handleFile}
            >
              <input type='file' name='avatar' />
            </button>
            {/* </form> */}
          </fieldset>
          <CustomTable id={id} user={myUser} />
        </div>
      )}
      {/* {tableUser && (
        <div>
        </div>
      )} */}
    </div>
  )
}
