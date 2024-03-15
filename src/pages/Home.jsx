import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Card from '../components/Card'
import logementsData from '../datas/logements.json'

const titleBanner = <h1>Chez vous, partout et ailleurs</h1>
const bannerPage = 'banner__homepage'

function Home() {         //Contenu et composant de la page d'accueil
  return (
    
      <div className="home-container">
        <Banner
              titleBanner={titleBanner}
              bannerPage={bannerPage}
              
        /> 
          <div className="cards-container"> 
          {/* Mapping sur les données de logement pour créer des liens vers les pages de chaque logements */}
          {logementsData.map((logement) => ( 
            <Link key={logement.id} to={`/logement/${logement.id}`}>
          {/* Affichage de la carte de logement avec un lien vers la page du logement */}
              <Card id={logement.id} />
            </Link>
        ))}
          </div>
      </div>
  )
}

export default Home