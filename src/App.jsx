import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import MenuCategory from './pages/MenuCategory';
import Reservations from './pages/Reservations';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-red-50 to-orange-50">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/cardapio/:categoria" element={<MenuCategory />} />
        <Route path="/reservas" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}
