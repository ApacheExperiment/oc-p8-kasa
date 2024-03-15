//import { Link } from 'react-router-dom'
import Logo from '../assets/logoKasa_blanc.png'



function Footer () {
    return ( 
        <footer> 
            {/* Utilisation d'une ancre avec l'ID de l'entête */}               
            <a href="#header">
                <img src={Logo} alt="logo kasa" className='header logo' />
            </a>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer