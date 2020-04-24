import React, { useState, useEffect } from 'react'
import { Div } from './styles'
import axios from 'axios'
const FetchCustom = props => {
  const [perfil, setPerfil] = useState('')
  const id = props.id

  const fetchCustomData = () => {
    //  fetch(`http://localhost:3000/configurar/${id}`)
    //  .then(respuesta => respuesta.json())
    //  .then(data => setPerfil(data))
    axios.get(`http://localhost:3000/configurar/${id}`)
    .then(data => setPerfil(data))
  }
  console.log('{PROPS]', props)
  useEffect(() => {
    fetchCustomData()
  },[])
  console.log("[PERFIL]: ",perfil)

  return <Div> 
    {
      perfil !== '' && <table>      
        <tbody>
      {
        
        perfil.data.data.map(item=>
            <tr key={item._id}>
              <th>{item.calorias}</th>
              <th>{item.comidas}</th>
              <th>{item.ejercicios}</th>
            </tr>
        )
      }
        </tbody>
      </table>
    }
  </Div>
}

export default FetchCustom
