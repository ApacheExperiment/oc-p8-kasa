import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import datas from '../datas/aboutRules.json'

function About() {

        const { aboutRules } = datas
        
    return (
        <div className="about">
                <Banner
                bannerPage="banner__about"
                /> 
                <div className="about__collapse-container">
                {/* Mapping sur les données de règles à propos pour créer les composants Collapse */}
                {aboutRules.map(({title, content}) => (         
                        <Collapse title={title} datas={content} key={title} /> // Ajout de la clé unique pour chaque Collapse
                ))}
                </div>
        </div>
    )
  }
  
export default About