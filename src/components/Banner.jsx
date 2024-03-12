import React from 'react'

function Banner ({ bannerPage, titleBanner }) {
    return <div className= {`banner ${bannerPage}`}>{titleBanner}</div>;
}
export default Banner
