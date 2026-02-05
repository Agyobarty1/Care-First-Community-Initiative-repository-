import React, { useState, useEffect } from 'react';
import { navigationItems } from '@/data/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    setOpenDropdown(null);
  };

  const toggleDropdown = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
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
            className="flex items-center space-x-3 text-brand-900
             hover:text-primary-700
             transition-colors"
            aria-label="CFCI Home"
          >
            <div className="w-22 h-15 flex items-center justify-center">
              <img 
                src="/assets/care-logo.png" 
                alt="Care First Community Initiative Logo" 
                className="w-full h-full object-contain"
              />
            </div>            
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-black hover:text-black font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-brand-200 py-2 transition-all duration-200 ${
                      openDropdown === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.id}
                        href={dropdownItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-3 text-black hover:bg-brand-50 hover:text-black transition-colors duration-200 font-medium"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-black hover:text-black font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
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
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-black hover:text-black hover:bg-brand-50 rounded-lg font-medium transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  <div 
                    className={`transition-all duration-200 overflow-hidden ${
                      openDropdown === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.id}
                          href={dropdownItem.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-black hover:text-black hover:bg-brand-50 rounded-lg text-sm transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-black hover:text-black hover:bg-brand-50 rounded-lg font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
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
