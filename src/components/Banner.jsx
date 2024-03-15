import React from 'react'

function Banner ({ bannerPage, titleBanner }) {
    // Renvoie de l'élément div avec la classe `banner` et une classe supplémentaire définie par la prop `bannerPage`
    //Le contenu de la bannière est défini par la prop `titleBanner`
    return <div className= {`banner ${bannerPage}`}>{titleBanner}</div>;
}
export default Banner
