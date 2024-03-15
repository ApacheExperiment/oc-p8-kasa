import React from 'react'
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

function Star({ isActive }) {
    // Sélection de l'image de l'étoile en fonction de son état (active ou inactive)

    const starImage = isActive ? starActive : starInactive;

    return (
        // Affichage de l'image de l'étoile
        <img 
            src={starImage}
            alt="star"
            className="star"
        />
    );
}


export default Star