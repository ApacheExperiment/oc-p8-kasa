import React from 'react'
import logementsData from '../datas/logements.json'


function Card({ id }) {             // Recherche du logement correspondant à l'ID fourni dans logements.json
    const logement = logementsData.find((logement) => logement.id === id);

    return (                      //Contenu et composant de chaque carte de la page d'accueil
        <div className="card">
          <h2>{logement.title}</h2> 
          <img  className="card__preview" src={logement.cover} alt={logement.title} /> </div>
      );
    }
    
    export default Card;