import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import About from '../About'
import Contact from '../Contact'
import Navbar from '../Navbar'


const Router = () => {

  return (
    <BrowserRouter>

      <Navbar />
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default Router;