import React from 'react';

const About: React.FC = () => {
  const quickFacts = [
    'Registered May 13, 2022 (CAC - Nigeria)',
    'Focus on dignity, rights, and resilience',
    'Inclusive and accountable assistance',
    'Multi-sectoral approach to development'
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                About Us
              </h2>
              <div className="space-y-4 text-brand-700 leading-relaxed">
                <p>
                  Care First Community Initiative (CFCI) is a non-profit, non-governmental 
                  organization (NGO) formally registered in Nigeria with the Corporate Affairs 
                  Commission on May 13, 2022. CFCI is committed to advancing human rights, 
                  upholding the rule of law, and promoting social welfare.
                </p>
                <p>
                  The organization works to alleviate poverty, reduce human suffering, and 
                  improve livelihoods for vulnerable populations including children, the elderly, 
                  persons with disabilities, and other marginalized groups.
                </p>
                <p>
                  Our programs cut across key sectors such as Food Security, Research, WASH, 
                  Livelihoods, Education, Shelter/CCCM/NFI, Warehousing and Logistics, Nutrition, 
                  Health, and Protection covering Access to Justice, Access to Information, and Advocacy.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Facts
              </h3>
              <ul className="space-y-3">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brand-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary-700 mb-1">10+</div>
                <div className="text-sm text-brand-600">Program Areas</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-secondary-700 mb-1">8</div>
                <div className="text-sm text-brand-600">SMT Members</div>
              </div>
            </div>

            {/* Principles */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
              <h3 className="text-lg font-bold text-brand-900 mb-3">
                Our Principles
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-brand-700">Humanity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-brand-700">Impartiality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-brand-700">Neutrality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-brand-700">Independence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
