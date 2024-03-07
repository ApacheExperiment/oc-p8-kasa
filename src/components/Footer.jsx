import { Link } from 'react-router-dom'
import Logo from '../assets/logoKasa_blanc.png'



function Footer () {
    return (
        <footer>
            <Link >
                <img src={Logo} alt="logo kasa" className='header logo' />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer