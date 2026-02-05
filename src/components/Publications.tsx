import React from 'react';

const Publications: React.FC = () => {
  const publications = [
    {
      id: '1',
      title: 'Best Practices in Humanitarian Response',
      description: 'A comprehensive guide on effective humanitarian interventions in crisis-affected communities.',
      type: 'Research Paper',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Community-Led Development Approaches',
      description: 'Insights and lessons learned from implementing community-driven development programs.',
      type: 'Case Study',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'WASH Program Implementation Guide',
      description: 'Technical guidelines for implementing water, sanitation, and hygiene programs in rural communities.',
      type: 'Technical Guide',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: '4',
      title: 'Gender-Based Violence Prevention Toolkit',
      description: 'Resources and strategies for preventing and responding to gender-based violence in humanitarian settings.',
      type: 'Toolkit',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: '5',
      title: 'Food Security and Nutrition Handbook',
      description: 'Practical approaches to addressing food insecurity and malnutrition in vulnerable populations.',
      type: 'Handbook',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: '6',
      title: 'Monitoring & Evaluation Framework',
      description: 'Comprehensive framework for measuring program effectiveness and impact in humanitarian operations.',
      type: 'Framework',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="publications" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Publications & Resources
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Access our collection of research papers, toolkits, and technical guides developed 
            to support humanitarian programming and community development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {publications.map((publication, index) => (
            <div 
              key={publication.id}
              className="card p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {publication.icon}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  {publication.type}
                </span>
                <span className="text-sm text-brand-600 font-medium">{publication.year}</span>
              </div>
              
              <h3 className="text-lg font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">
                {publication.title}
              </h3>
              
              <p className="text-brand-700 text-sm leading-relaxed mb-4">
                {publication.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-brand-200">
                <span className="text-sm text-secondary-600 font-medium flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{publication.status}</span>
                </span>
                
                <button 
                  disabled
                  className="text-brand-400 font-medium text-sm flex items-center space-x-2 cursor-not-allowed"
                >
                  <span>Download</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">
                  Knowledge Sharing & Learning
                </h3>
                <p className="text-brand-700 leading-relaxed">
                  Our publications represent our commitment to evidence-based programming and knowledge 
                  sharing within the humanitarian sector. These resources are developed based on our field 
                  experience and research, designed to support practitioners, partners, and communities. 
                  Check back regularly for new publications and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
