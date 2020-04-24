import React, { useState, useEffect } from 'react'
import hero from '../../images/portadaAndres.png'
import { Image } from '../../images/form-image'

const Formulario = (props) => {
  const [user, setUser] = useState({
    value: 'leo',
    loading: true,
  })
  const [trae, setTrae] = useState('')
console.log("PRPP",props)
  const handleLeo = e => {
    e.persist()
    console.log({
      ...e.target,
      value: e.target.value,
    })
    setUser({
      value: e.target.value,
      loading: false,
    })
    // console.log('[OBJETO.NAME]', obj.name)
  }

  console.log('[USUARIO]', user)
  return (
    <>
      {/* <form action='' onSubmit={handleLeo}>
        <input
          type='text'
          name='nombre'
          // id='leo'
          value={user.value}
          onChange={handleLeo}
        />
      </form> */}
    </>
  )
}

const Hero = () => (
  <div>
    ******************************************************************************************************************************
    <Formulario />
    <Image />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam cupiditate iste error sed, temporibus consequuntur impedit harum id quaerat! Dicta ipsam iusto accusamus at accusantium aliquid unde illum atque!
  </div>
)

export default Hero
