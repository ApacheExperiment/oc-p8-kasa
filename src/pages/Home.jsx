import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import logementsData from '../datas/logements.json'

const titleBanner = <h1>Chez vous, partout et ailleurs</h1>
const bannerPage = 'banner__homepage'

function Home() {
  return (
    
      <div className="home-container">
        <Banner
              titleBanner={titleBanner}
              bannerPage={bannerPage}
        /> 
          <div className="cards-container">
          {logementsData.map((logement) => (
          <Card key={logement.id} id={logement.id} />
        ))}
          </div>
      </div>
  )
}

export default Home