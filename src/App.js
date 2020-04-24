import React from 'react'
import { StylesGlobal } from './styles/StylesGlobal'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Hero'
import { Image } from './images/form-image'
import { Users } from './components/mapUsers.js'
import { ConfigurarUser } from './components/ConfigurarUser'
import { PagNotFound } from './components/PagNotFound'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <StylesGlobal />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/listar' component={Users} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/configurar/:id' component={ConfigurarUser} />
          <Route component={PagNotFound} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
