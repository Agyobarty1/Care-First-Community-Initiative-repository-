import React from 'react';

const TendersCareers: React.FC = () => {
  const tenders = [
    {
      id: '1',
      title: 'Supply of Food Items',
      reference: 'CFCI/TND/2024/001',
      category: 'Procurement',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Supply of assorted food items for food security programs in Borno State.'
    },
    {
      id: '2',
      title: 'Construction of WASH Facilities',
      reference: 'CFCI/TND/2024/002',
      category: 'Construction',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Construction and installation of water points and sanitation facilities.'
    },
    {
      id: '3',
      title: 'Consulting Services - M&E',
      reference: 'CFCI/TND/2024/003',
      category: 'Consulting',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Monitoring and evaluation services for ongoing humanitarian programs.'
    }
  ];

  const careers = [
    {
      id: '1',
      title: 'Program Officer - Food Security',
      location: 'Maiduguri, Borno State',
      type: 'Full-time',
      level: 'Mid-level',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Lead implementation of food security and nutrition programs in crisis-affected communities.'
    },
    {
      id: '2',
      title: 'WASH Specialist',
      location: 'Adamawa State',
      type: 'Full-time',
      level: 'Senior',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Design and oversee WASH interventions ensuring access to clean water and sanitation.'
    },
    {
      id: '3',
      title: 'Finance Officer',
      location: 'Maiduguri, Borno State',
      type: 'Full-time',
      level: 'Mid-level',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Manage financial operations, budgeting, and reporting for humanitarian programs.'
    },
    {
      id: '4',
      title: 'Protection Officer',
      location: 'Yobe State',
      type: 'Contract',
      level: 'Mid-level',
      deadline: 'Coming Soon',
      status: 'Upcoming',
      description: 'Implement protection activities including GBV prevention and response services.'
    }
  ];

  return (
    <section id="tenders-careers" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tenders & Careers
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Explore current tender opportunities and career openings at Care First Community Initiative.
          </p>
        </div>

        {/* Tenders Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              Current Tenders
            </h3>
            <span className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              {tenders.length} Opportunities
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenders.map((tender, index) => (
              <div 
                key={tender.id}
                className="card p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                    {tender.category}
                  </span>
                  <span className="text-xs font-semibold text-secondary-700 bg-secondary-50 px-3 py-1 rounded-full">
                    {tender.status}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {tender.title}
                </h4>

                <p className="text-sm text-brand-600 mb-3 font-mono">
                  Ref: {tender.reference}
                </p>

                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  {tender.description}
                </p>

                <div className="pt-4 border-t border-brand-200 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-600 font-medium">Deadline:</span>
                    <span className="text-brand-900 font-semibold">{tender.deadline}</span>
                  </div>
                  <button 
                    disabled
                    className="w-full btn bg-brand-100 text-brand-400 cursor-not-allowed text-sm py-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              Career Opportunities
            </h3>
            <span className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              {careers.length} Positions
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((career, index) => (
              <div 
                key={career.id}
                className="card p-6 group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      {career.type}
                    </span>
                    <span className="text-xs font-semibold text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
                      {career.level}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-secondary-700 bg-secondary-50 px-3 py-1 rounded-full">
                    {career.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {career.title}
                </h4>

                <div className="flex items-center space-x-2 text-brand-600 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{career.location}</span>
                </div>

                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  {career.description}
                </p>

                <div className="pt-4 border-t border-brand-200 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-600 font-medium">Application Deadline:</span>
                    <span className="text-brand-900 font-semibold">{career.deadline}</span>
                  </div>
                  <button 
                    disabled
                    className="w-full btn bg-brand-100 text-brand-400 cursor-not-allowed text-sm py-2"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Box */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-900 mb-3">
                  Tender Information
                </h4>
                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  All tender documents will be available for download when published. Interested bidders 
                  should regularly check this page for updates and ensure compliance with all requirements.
                </p>
                <a 
                  href="mailto:bagyo@cfcinitiative.org" 
                  className="text-primary-700 hover:text-primary-800 font-medium text-sm flex items-center space-x-2"
                >
                  <span>Contact Procurement</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0v2m-8-2v2m0 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-900 mb-3">
                  Career Information
                </h4>
                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  We are an equal opportunity employer committed to diversity and inclusion. Join our team 
                  of dedicated professionals making a difference in humanitarian response across Nigeria.
                </p>
                <a 
                  href="mailto:bagyo@cfcinitiative.org" 
                  className="text-primary-700 hover:text-primary-800 font-medium text-sm flex items-center space-x-2"
                >
                  <span>Contact HR</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TendersCareers;
