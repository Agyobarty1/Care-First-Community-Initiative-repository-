import React from 'react';

const Impact: React.FC = () => {
  const impactStats = [
    {
      id: '1',
      number: '50+',
      label: 'Communities Reached',
      description: 'Across multiple states in Nigeria',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: '2',
      number: '10,000+',
      label: 'Lives Impacted',
      description: 'Through our various programs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '3',
      number: '13',
      label: 'Program Areas',
      description: 'Comprehensive humanitarian response',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: '4',
      number: '24/7',
      label: 'Commitment',
      description: 'Dedicated to serving communities',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const impactAreas = [
    {
      id: '1',
      title: 'Food Security & Nutrition',
      description: 'Providing nutritious food and combating malnutrition in vulnerable communities.',
      impact: 'Thousands of families supported with food assistance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Education & Capacity Building',
      description: 'Ensuring access to quality education and skills development for children and youth.',
      impact: 'Educational support reaching multiple communities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'WASH & Health',
      description: 'Improving access to clean water, sanitation, and primary healthcare services.',
      impact: 'Communities benefiting from improved WASH facilities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: '4',
      title: 'Protection & Advocacy',
      description: 'Safeguarding vulnerable populations and advocating for their rights and dignity.',
      impact: 'Protection services and advocacy initiatives implemented',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="impact" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Measuring our commitment to creating lasting change in the lives of vulnerable 
            communities across Nigeria through evidence-based interventions.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={stat.id}
              className="card p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-black">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Key Impact Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {impactAreas.map((area, index) => (
              <div 
                key={area.id}
                className="card p-6 group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-black mb-2">
                      {area.title}
                    </h4>
                    <p className="text-black text-sm mb-3 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex items-center space-x-2 text-primary-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">{area.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Creating Sustainable Change
            </h3>
            <p className="text-black leading-relaxed mb-6">
              Since our establishment in 2022, Care First Community Initiative has been at the 
              forefront of humanitarian response in Nigeria. Our impact extends beyond numbers—we 
              measure success by the dignity restored, the hope renewed, and the communities 
              empowered to build their own sustainable futures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-primary-600 rounded-full" />
                <span className="text-black font-medium">Evidence-Based Approach</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-secondary-600 rounded-full" />
                <span className="text-black font-medium">Community-Led Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-brand-600 rounded-full" />
                <span className="text-black font-medium">Sustainable Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
