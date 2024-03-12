import React from 'react'
/*import { Link } from 'react-router-dom'*/
import logementsData from '../datas/logements.json'


function Card({ id }) {
    const logement = logementsData.find((logement) => logement.id === id);

    return (
        <div className="card">
          <h2>{logement.title}</h2> 
          <img  className="card__preview" src={logement.cover} alt={logement.title} /> </div>
      );
    }
    
    export default Card;