import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

class Navbar extends React.Component{

  render() {
    return(
      <div id="Navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/history">History</Link>
      </div>
    )
  }
}

export default Navbar