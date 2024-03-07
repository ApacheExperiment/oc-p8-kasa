import Banner from '../components/Banner'
import Card from '../components/Card'

const titleBanner = <h1>Chez vous, partout et ailleurs</h1>
const bannerHomePage = 'banner__homepage'

function Home() {
  return (
    
      <div className="container">
        <Banner
              titleBanner={titleBanner}
              bannerHomepage={bannerHomePage}
        /> 
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
      </div>
  )
}

export default Home