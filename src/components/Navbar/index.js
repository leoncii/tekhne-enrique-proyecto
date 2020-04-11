import React from 'react'
import bruce from '../../images/302.jpg'
import { Img, Div, A } from './styles.js'
import { Link as a } from 'react-router-dom'

const Navbar = () => (
  <Div>
    <a href='/'>
      <Img src={bruce} alt='LOGO BRUCE' />
    </a>
    <A href='/userList'>
      <span> Listas</span>
    </A>
    <A href='/form'>
      <span>Crear usuario</span>
    </A>
  </Div>
)

export default Navbar
