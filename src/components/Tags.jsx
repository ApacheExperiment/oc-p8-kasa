import React from 'react'

function Tags({ tags }) {
    return (
        // Liste non-ordonnée pour afficher les tags
        <ul className="tags">
        {/* Mapping sur le tableau de tags pour créer un élément li pour chaque tag */}
            {tags.map((tag, index) => (
                <li className="tag" key={index}>        {/* Utilisation de l'index comme clé unique pour chaque tag */}
                    {tag}                               {/* Affichage du tag */}
                </li>
            ))}
        </ul>
    )
}

export default Tags