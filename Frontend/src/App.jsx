import React from 'react';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import ProductDetails from './Components/ProductDetails';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import CTABanner from './Components/CTABanner';

function App() {
    const location = useLocation(); // Get the current location

    return (
        <>
            <Navbar />
            {/* Conditionally render CTABanner only on the home page */}
            {location.pathname === '/' && <CTABanner />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
