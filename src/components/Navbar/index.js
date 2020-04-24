import React from 'react'
// import bruce from '../../images/302.jpg'
import { Img, Div, A, Button, Span } from './styles.js'
import { Link } from 'react-router-dom'
import Dog from '../../images/dog-proyecto.jpg'

const Navbar = () => (
  <Div>
    <picture>
      <Link to='/'>
        <Img src={Dog} alt='LOGO BRUCE' />
      </Link>
    </picture>
    <Button>
      <Link to='/listar'>
        <Span> Listas</Span>
      </Link>
    </Button>
    <Button>
      <Link to='/login'>
        <Span>Crear usuario</Span>
      </Link>
    </Button>
    <button>
      <a
        href='http://localhost:3000/table'
        // to={{
        //   pathname: '/courses',
        //   search: '?sort=name',
        //   hash: '#the-hash',
        //   // state: { fromDashboard: true },
        // }}
      >
        <Span>Mostrar tabla de usuarios</Span>
      </a>
    </button>
  </Div>
)

export default Navbar
