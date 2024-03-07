import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logoKasa.png'
import NavBar from "./NavBar"



function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo kasa" className='header logo' />
      </Link>
    
      <NavBar />
    </header>
    
  )
}

export default Header