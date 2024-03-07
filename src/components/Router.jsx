import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Error from '../pages/Error'
import About from '../pages/About'

function Router() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router