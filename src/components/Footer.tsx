import React from 'react';
import { organizationInfo } from '@/data/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About CFCI', href: '#about-cfci' },
    { label: 'Our Values', href: '#our-values' },
    { label: 'Senior Management Team', href: '#smt' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Activities', href: '#activities' },
    { label: 'Impact', href: '#impact' },
    { label: 'News', href: '#news' },
    { label: 'Reports', href: '#reports' },
    { label: 'Publications', href: '#publications' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Work With Us', href: '#work-with-us' },
    { label: 'Business Opportunities', href: '#business-opportunities' },
    { label: 'Tenders & Careers', href: '#tenders-careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CFCI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{organizationInfo.name}</h3>
                  <p className="text-brand-300 text-sm">Humanitarian Excellence</p>
                </div>
              </div>
              
              <p className="text-brand-300 leading-relaxed mb-6 max-w-md">
                {organizationInfo.mission}
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=61587346564234" 
                  className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/cfcinitiative.org2/" 
                  className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/care-first-community-initiative-cfci-a09aa2396/" 
                  className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-brand-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-brand-300">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p>+234 802 653 3075</p>
                    <p>+234 703 462 4598</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>bagyo@cfcinitiative.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-brand-300 text-sm">
              © {currentYear} {organizationInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-brand-300">
              <span>Humanity • Impartiality • Neutrality • Independence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

