import React from 'react'
import Star from './Star'

function Rating({ rating }) {
    const set = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {/* Mapping sur la plage de valeurs pour afficher les étoiles */}
            {set.map((index, setElem) =>
            rating < setElem ? (
                <Star key={index} color="neutral" />
            ) : (
                <Star key={index} color="highlight" />
            )
            )}
        </div>
    )
}

export default Rating