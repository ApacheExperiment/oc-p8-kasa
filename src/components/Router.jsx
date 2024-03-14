import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import des composants de routage depuis react-router-dom
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import PageLogement from '../pages/PageLogement'
import Error from '../pages/Error'
import About from '../pages/About'

function Router() {
    return (
        <BrowserRouter>                                     {/*Conteneur pour les routes*/}
        <Header />
        <Routes>                                            {/*Déclaration des routes pour l'application*/}
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/logement/:idLogement" element={<PageLogement />}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router