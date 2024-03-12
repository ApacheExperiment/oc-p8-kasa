import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import datas from '../datas/aboutRules.json'
import { useEffect } from 'react'

function About() {
        useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
        }, [])

        const { aboutRules } = datas
    return (
        <div className="about">
                <Banner
                bannerPage="banner__about"
                /> 
                <div className="about__collapse-container">
                {aboutRules.map(({title, content}) => (
                        <Collapse title={title} datas={content} />
                ))}
                </div>
        </div>
    )
  }
  
  export default About