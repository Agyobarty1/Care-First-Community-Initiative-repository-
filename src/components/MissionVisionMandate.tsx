import React from 'react';
import { organizationInfo } from '@/data/constants';

const MissionVisionMandate: React.FC = () => {
  const cards = [
    {
      title: 'Vision',
      content: organizationInfo.vision,
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-700'
    },
    {
      title: 'Mission',
      content: organizationInfo.mission,
      icon: (
        <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-700'
    },
    {
      title: 'Mandate',
      content: organizationInfo.mandate,
      icon: (
        <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-brand-500 to-brand-700'
    }
  ];

  return (
    <section id="mvm" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Our Foundation
          </h2>
          <p className="text-lg text-brand-600 max-w-3xl mx-auto">
            Guided by our vision, mission, and mandate, we work tirelessly to create 
            lasting positive change in communities across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={card.title}
              className="card p-8 group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-brand-600 leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Registration Info */}
        <div className="mt-16 bg-[rgb(138,201,9)] rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-primary-700">Officially Registered</span>
            </div>
            <p className="text-brand-700 font-medium">
              Registered with {organizationInfo.registrationBody} on {organizationInfo.registrationDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionMandate;
