import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <li>
        <Link to="/">
            Home
        </Link>    
        </li>
        <li>
        <Link to="/users">
            Users
        </Link>    
        </li><li>
        <Link to="/about">
            About
        </Link>    
        </li>
    </nav>
  )
}

export default Navbar
