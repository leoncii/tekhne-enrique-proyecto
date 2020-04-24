import React, { useState, useEffect, useMemo } from 'react'
import { set } from 'mongoose'
import { Link } from 'react-router-dom'
import Cargando from '../Cargando'
import Test from './mapUser'
import axios from 'axios'

const Data = () => {
  const [trae, setTrae] = useState('')
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  // const [filteredUser, setFilteredUser] = useState(
  //   trae || '',
  // )

  const fetchData = () => {
    // fetch('http://localhost:3000')
    //   .then(res => res.json())
    //   .then(data => setTrae(data))
    axios.get('http://localhost:3000').then(function(data) {
      setTrae(data)
      console.log('DATA_AXIS: listar ', data)
      
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleConfigurar = id => {
    fetch(`http://localhost:3000/configurar/${id} `, {
      method: 'PUT',
    })
  }

  const handleDeleteUser = id => {
    console.log('delete USER')
    fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE',
    })
  }

  if (typeof trae == 'string') {
    return <Cargando />
  } else {
    // useMemo(() => {
    //   const filtrados = trae.body.filter(filtrado => {
    //     return filtrado.user
    //       .toLowerCase()
    //       .includes(filter.toLowerCase())
    //   })
    //   setFilteredUser(filtrados)
    // }, [trae, filter])

    const filteredUser = trae.data.body.filter(filtrado => {
      return filtrado.user
        .toLowerCase()
        .includes(filter.toLowerCase())
    })

    const listar = filteredUser.map(function(item) {
      const { user, _id } = item
      return (
        <li key={_id}>
          {user}
          <button onClick={() => handleConfigurar(_id)}>
            <Link to={`/configurar/${_id}`}>
              Configurar
            </Link>
          </button>
          <button onClick={() => handleDeleteUser(_id)}>
            <a href='/'>Borrar</a>
          </button>
        </li>
      )
    })
    return (
      <div>
        <div>
          <label htmlFor='Buscados'>Buscar usuario</label>
          <input
            type='filtrar'
            name='filtrar'
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          <br />
          <h2>Usuarios: </h2>
        </div>
        <ol>{listar}</ol>
      </div>
    )
  }
}

export const Users = () => {
  return (
    <div>
      <div>
        <Data />
      </div>
    </div>
  )
}
