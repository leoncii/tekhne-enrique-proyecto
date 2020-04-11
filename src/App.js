import React from 'react'
import { StylesGlobal } from './styles/StylesGlobal'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Hero'

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <StylesGlobal />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/form' component={Login} />
    </Switch>
  </BrowserRouter>
)

// const App = () => {

//   return (
//     <div>
//       <StylesGlobal />
//       <h1>-----------------NAVBAR-----------</h1>

//       <Login />
//     </div>
//   )
// }

export default App
