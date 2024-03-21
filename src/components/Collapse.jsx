import React from 'react'
import { useState, useRef } from 'react'        // Import de useState et useRef pour gérer l'état et les références dans le composant
import arrow from '../assets/arrow_top.png'

function Collapse ({datas, title}) {
    const [isOpen, setIsOpen] = useState(false) // État local pour contrôler l'ouverture ou la fermeture du Collapse

    const toggle = () => setIsOpen(!isOpen)     // Fonction pour basculer l'état d'ouverture ou de fermeture

    const handleDatas = () => {                 // Fonction pour rendre les données du Collapse sous forme de liste
        if (typeof datas === 'string') {
            return <li>{datas}</li>
        }
        return datas.map((data, index) => <li key={index}>{data}</li>)
    }

    const parentRef = useRef()                  // Référence pour le conteneur parent, utilisée pour calculer la hauteur de l'animation

    return (
        <div className="collapse">
                                                {/* Icône de flèche pour indiquer l'état d'ouverture ou de fermeture */}

            <img 
            onClick={toggle}
            className={`collapse__button ${isOpen ? 'active' : ''}`}
            src={arrow} 
            alt="collapse arrow"/>
            <h3>{title}</h3>
            <div 
                ref={parentRef} 
                className={`collapse__content-container ${isOpen ? 'active' : ''} `}
                style={
                    isOpen
                    ? {height: parentRef.current.scrollHeight + 'px'}
                    : {height: '0px' }
            }
            >
            <ul className="collapse__content">{handleDatas()}</ul>
            </div>
        </div>
    )
}
export default Collapse