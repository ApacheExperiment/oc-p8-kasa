import React from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'
import logementsData from '../datas/logements.json'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Error from './Error'

function PageLogement() {
    
    const { idLogement } = useParams();         // Récupérer l'ID du logement depuis l'URL
    const logement = logementsData.find((logement) => logement.id === idLogement); // Trouver le logement correspondant à l'ID

    if (!logement) {
        return <Error />;
    }
        
return (
    <div className="pageLogement">
        <Slider pictures={logement.pictures} />
        <div className="pageLogement__container">
            <div className="pageLogement__head">
            <h2 className="pageLogement__title">{logement.title}</h2>
            <p className="pageLogement__location">{logement.location}</p>
            <Tags tags={logement.tags}/>
            </div>
         
            <div className="pageLogement__informations">
                <div className="pageLogement__informations__renter">
                    <p className="pageLogement__informations__renter-name">{logement.host.name}</p>
                    <img className="pageLogement__informations__renter-pic" src={logement.host.picture} alt={logement.host.name}/>
                </div>
                <Rating rating={logement.rating}/>
            </div>
        </div> 
        <div className="pageLogement__collapse-container">
        
        <Collapse title="Description" datas={[logement.description]} /> 
        <Collapse title="Équipements" datas={logement.equipments} /> 
        </div>
    </div>
)
}

export default PageLogement