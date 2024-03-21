import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logoKasa.png'
import NavBar from "./NavBar"



function Header() {
  return (
    <header>
      {/* Utilisation d'une ancre avec l'ID de l'entête, permet qu'au pied de page on puisse revenir sur la page d'accueil*/}  
      <Link to="/" id="header">
        <img src={Logo} alt="logo kasa" className='header logo' />
      </Link>
    
      <NavBar />
    </header>
    
  )
}

export default Header