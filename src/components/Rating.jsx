import React from 'react'
import Star from './Star'

function Rating({ rating }) {
    const set = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {/* Mapping sur la plage de valeurs pour afficher les étoiles */}
            {set.map((index, setElem) =>
            rating < setElem ? (
                <Star key={index} isActive={false} />
            ) : (
                <Star key={index} isActive={true} />
            )
            )}
        </div>
    )
}

export default Rating