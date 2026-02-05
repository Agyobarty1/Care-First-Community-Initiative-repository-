import React from 'react';

const WorkWithUs: React.FC = () => {
  const partnershipTypes = [
    {
      id: '1',
      title: 'Strategic Partnerships',
      description: 'Collaborate with us on long-term initiatives that create sustainable impact in vulnerable communities.',
      benefits: [
        'Joint program implementation',
        'Resource sharing and capacity building',
        'Shared learning and innovation',
        'Enhanced reach and impact'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Funding Partners',
      description: 'Support our mission through grants, donations, and funding opportunities that enable us to expand our reach.',
      benefits: [
        'Transparent fund management',
        'Regular impact reporting',
        'Recognition and visibility',
        'Tax benefits and compliance'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'Technical Partners',
      description: 'Provide technical expertise, training, and capacity building support to strengthen our programs.',
      benefits: [
        'Knowledge exchange programs',
        'Technical assistance and training',
        'Research collaboration',
        'Innovation and best practices'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: '4',
      title: 'Volunteer Programs',
      description: 'Join our team of dedicated volunteers making a difference in communities across Nigeria.',
      benefits: [
        'Hands-on field experience',
        'Professional development',
        'Networking opportunities',
        'Certificate of participation'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="work-with-us" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work With Us
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Partner with Care First Community Initiative to create lasting impact in vulnerable 
            communities. Together, we can build a better future for those who need it most.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <div 
              key={type.id}
              className="card p-8 group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-brand-700 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-brand-900 text-sm mb-3">Key Benefits:</h4>
                {type.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-brand-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Partner With Us */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-900 mb-6 text-center">
              Why Partner With CFCI?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-brand-900 mb-2">Proven Track Record</h4>
                <p className="text-brand-700 text-sm">
                  Demonstrated success in humanitarian response and community development
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-brand-900 mb-2">Transparency</h4>
                <p className="text-brand-700 text-sm">
                  Full accountability and regular reporting on all partnership activities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-brand-900 mb-2">Measurable Impact</h4>
                <p className="text-brand-700 text-sm">
                  Evidence-based approach with clear metrics and impact assessment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-brand-700 mb-6">
              Get in touch with us to explore partnership opportunities and learn how we can work 
              together to create sustainable impact in communities across Nigeria.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
