import React from 'react'
import starActive from '../assets/star-active.png'

function Star() {
   
    const star = (
       <img 
        src={starActive}
        alt="star"
        className="star"
        >
        </img>
    )
    return star
}

export default Star