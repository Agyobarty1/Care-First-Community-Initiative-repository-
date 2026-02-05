import React from 'react';

const BusinessOpportunities: React.FC = () => {
  const opportunities = [
    {
      id: '1',
      title: 'Supply Chain & Logistics',
      description: 'We work with reliable suppliers and logistics partners to ensure timely delivery of humanitarian assistance.',
      areas: [
        'Food and non-food items supply',
        'Transportation and logistics services',
        'Warehousing and storage solutions',
        'Distribution network partnerships'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Construction & Infrastructure',
      description: 'Partner with us on building and rehabilitating essential infrastructure in communities we serve.',
      areas: [
        'WASH facilities construction',
        'School and health center rehabilitation',
        'Shelter construction and repair',
        'Infrastructure maintenance services'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'Professional Services',
      description: 'We engage professional service providers to support our operations and program implementation.',
      areas: [
        'Consulting and advisory services',
        'Training and capacity building',
        'Research and evaluation',
        'IT and technology solutions'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0v2m-8-2v2m0 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
        </svg>
      )
    },
    {
      id: '4',
      title: 'Equipment & Technology',
      description: 'Suppliers of equipment, technology, and innovative solutions that enhance our program delivery.',
      areas: [
        'Office equipment and supplies',
        'Field equipment and tools',
        'Communication technology',
        'Data management systems'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const requirements = [
    {
      title: 'Registration & Compliance',
      items: [
        'Valid business registration (CAC)',
        'Tax compliance certificates',
        'Relevant licenses and permits',
        'Insurance coverage'
      ]
    },
    {
      title: 'Quality Standards',
      items: [
        'Proven track record',
        'Quality assurance systems',
        'Timely delivery capability',
        'Competitive pricing'
      ]
    },
    {
      title: 'Ethical Standards',
      items: [
        'Anti-corruption commitment',
        'Environmental responsibility',
        'Fair labor practices',
        'Safeguarding policies'
      ]
    }
  ];

  return (
    <section id="business-opportunities" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Business Opportunities
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            CFCI welcomes partnerships with businesses and service providers who share our commitment 
            to quality, integrity, and social impact.
          </p>
        </div>

        {/* Opportunity Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div 
              key={opportunity.id}
              className="card p-8 group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {opportunity.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {opportunity.title}
                  </h3>
                  <p className="text-brand-700 leading-relaxed text-sm">
                    {opportunity.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-brand-900 text-sm mb-3">Areas of Engagement:</h4>
                {opportunity.areas.map((area, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-brand-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Supplier Requirements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold text-brand-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {req.title}
                </h4>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brand-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-900 mb-6 text-center">
              How to Register as a Supplier
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <p className="text-brand-700 text-sm font-medium">
                  Review requirements and prepare documents
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <p className="text-brand-700 text-sm font-medium">
                  Submit expression of interest via email
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <p className="text-brand-700 text-sm font-medium">
                  Complete supplier registration form
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <p className="text-brand-700 text-sm font-medium">
                  Await evaluation and approval
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-brand-700 mb-4">
                For inquiries about business opportunities, please contact our procurement team:
              </p>
              <a 
                href="mailto:bagyo@cfcinitiative.org" 
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunities;
