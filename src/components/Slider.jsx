import React, { useState } from 'react'
import SlideButton from './SlideButton'

function Slider({ pictures }) {
    // Utilisation du hook useState pour gérer l'état du défilement du slider
    const [slideScroll, setSlideScroll] = useState({
        index: 1,                                   // Index de l'image actuellement affichée
    })

    // Fonction pour passer à la diapositive suivante
    const beforeSlide = () => {
        if (slideScroll.index !== pictures.length) {
            setSlideScroll({ index: slideScroll.index + 1 }) // Incrémente l'index
        } else {
            setSlideScroll({ index: 1 }) // Reviens à la première diapositive si l'utilisateur atteint la dernière
        }
    }
    // Fonction pour passer à la diapositive précédente
    const afterSlide = () => {
        if (slideScroll.index !== 1 ) {
            setSlideScroll({ index: slideScroll.index -1 }) // Décrémente l'index
        } else {
            setSlideScroll({ index: pictures.length }) // Revient à la dernière diapositive si l'utilisateur est sur la première
        }
    }
    return (
        <div className="slider">
            {/* Affichage des images du slider */}
            {pictures.map((picture, index) => {
                return (
                    <div
                        className={
                            slideScroll.index === index + 1
                            ? 'slider__slide slider__slide-active' // Applique la classe active à la diapositive actuelle
                            : 'slider__slide'
                        }
                        key={index}
                    >
                        <img
                        src={picture}
                        key={index}
                        alt="intérieur du logement"
                        />
                    </div>
                )
            })}
            {/* Affichage du compteur de diapositives */}
            {pictures.length > 1 && (
                <div className="slider__counter">
                    {`${slideScroll.index}\\${pictures.length}`}
                </div>
            )}

            {/* Affichage des boutons de navigation */}
            {pictures.length > 1 && (
                <SlideButton showSlide={beforeSlide} direction={'before'}/>
            )}
             {pictures.length > 1 && (
                <SlideButton showSlide={afterSlide} direction={'after'}/>
            )}
        </div>
    )
}
export default Slider