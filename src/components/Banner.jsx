import React from 'react'

function Banner ({ bannerHomepage, titleBanner }) {
    return <div className= {`banner ${bannerHomepage}`}>{titleBanner}</div>;
}
export default Banner
