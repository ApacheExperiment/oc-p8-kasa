import React from 'react'
import {NavLink} from 'react-router-dom'


function NavBar () {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar