import React, { useState, useEffect } from 'react';
import { navigationItems } from '@/data/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 text-brand-900 hover:text-primary-700 transition-colors"
            aria-label="CFCI Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CFCI</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">Care First Community Initiative</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-brand-700 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              className="btn btn-primary text-sm px-6 py-2"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span 
                className={`block h-0.5 w-6 bg-brand-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-brand-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-brand-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-brand-700 hover:text-primary-700 hover:bg-brand-50 rounded-lg font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={closeMenu}
              className="block px-4 py-3 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-medium transition-colors duration-200 text-center"
            >
              Donate Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
