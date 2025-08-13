import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Clock } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: t('navHome'), action: () => scrollToSection('hero') },
    { name: t('navAbout'), action: () => scrollToSection('about') },
    { name: t('navMenu'), path: '/menu' },
    { name: t('navReservations'), path: '/reservations' },
    { name: t('navContact'), action: () => scrollToSection('contact') }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/testeeeeeee/testeeeeeee-logo-full-2025-08-11T22-02-03-802Z.svg"
              alt="Testeeeeeee"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'brightness-0' : 'brightness-100'
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-300 hover:text-wine-600 ${
                      isScrolled ? 'text-gray-800' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className={`font-medium transition-colors duration-300 hover:text-wine-600 ${
                      isScrolled ? 'text-gray-800' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-6">
              <button onClick={() => changeLanguage('pt')} className={`font-semibold text-sm transition-colors ${i18n.language.startsWith('pt') ? 'text-wine-600' : 'text-gray-500 hover:text-gray-800'}`}>PT</button>
              <span className={`text-gray-300 ${isScrolled ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
              <button onClick={() => changeLanguage('en')} className={`font-semibold text-sm transition-colors ${i18n.language === 'en' ? 'text-wine-600' : 'text-gray-500 hover:text-gray-800'}`}>EN</button>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className={`w-4 h-4 ${isScrolled ? 'text-wine-600' : 'text-wine-600'}`} />
              <span className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                Ter-Dom: 18h-23h
              </span>
            </div>
            <a
              href="tel:+5511999999999"
              className="wine-button flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:text-wine-600 font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:text-wine-600 font-medium"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 text-wine-600" />
                  <span>Ter-Dom: 18h-23h</span>
                </div>
                <a
                  href="tel:+5511999999999"
                  className="wine-button w-full flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}