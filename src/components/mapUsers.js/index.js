import React, { useState, useEffect } from 'react'
import { set } from 'mongoose'
import Test from './test'

const Navbar = () => {
  const [trae, setTrae] = useState([])
  const [loading, setLoading] = useState(true)

  const PrintData = () => <div> data traida</div>

  const fetchData = () => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setTrae(data), setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>NAVBARDESDEELCOMPONENTE</h1>
      {trae.body == undefined ? (
        <div>Loading </div>
      ) : (
        <div>----Todo bien----</div>
      )}
      {trae.body == undefined ? (
        <div>No hay data</div>
      ) : (
        <div>
          {' '}
          Hay data <Test users={trae.body} />{' '}
        </div>
      )}
      <ul>
        {[1, 3, 5, 6, 7, 8, 4].map(item => (
          <li key={item}>Item: {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
