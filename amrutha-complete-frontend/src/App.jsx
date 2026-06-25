
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/packages' element={<PackagesPage />} />
            <Route path='/reviews' element={<ReviewsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>

        <footer className='footer'>
          <div className='footer-content'>
            <div className='footer-section'>
              <h4>About Us</h4>
              <p>Premium travel services for unforgettable journeys across India.</p>
            </div>
            <div className='footer-section'>
              <h4>Quick Links</h4>
              <a href='/services'>Services</a>
              <a href='/packages'>Packages</a>
            </div>
            <div className='footer-section'>
              <h4>Follow Us</h4>
              <p>📱 Social Media Coming Soon</p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>© 2026 Amrutha Tours & Travels. All rights reserved.</p>
          </div>
        </footer>

        <div className='float'>
          <a href='tel:+919949666526' className='float-btn call' title='Call us'>📞</a>
          <a href='https://wa.me/919949666526' className='float-btn whatsapp' title='WhatsApp'>💬</a>
        </div>
      </div>
    </BrowserRouter>
  );
}
