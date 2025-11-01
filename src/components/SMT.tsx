import React from 'react';
import { teamMembers } from '@/data/constants';

const SMT: React.FC = () => {
  return (
    <section id="smt" className="section-padding bg-gradient-to-br from-secondary-100 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Senior Management Team
          </h1>
          <p className="text-lg text-brand-600 max-w-3xl mx-auto">
            Our leadership team brings together diverse expertise and unwavering commitment 
            to drive CFCI's mission forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="card p-8 text-center group hover:shadow-lg 
              transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image or Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 
                rounded-2xl flex items-center justify-center text-white text-2xl font-bold 
                mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg overflow-hidden"
              >
                <img
                  src={member.image || '/assets/kemi.jpg'}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">
                {member.name}
              </h3>
              
              {/* Position */}
              <p className="text-brand-600 text-sm leading-relaxed">
                {member.position}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Statement */}
        <div className="mt-16 bg-gradient-to-r from-brand-50 to-primary-50 rounded-2xl p-8 border border-primary-200">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-brand-900 mb-4">
              Leadership Excellence
            </h1>
            <p className="text-brand-700 leading-relaxed mb-6">
              Our Senior Management Team combines decades of experience in humanitarian work, 
              development programming, and organizational leadership. Each member brings unique 
              expertise while sharing a common commitment to CFCI's values and mission.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-700 mb-2">8</div>
                <div className="text-sm text-brand-600">Leadership Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-700 mb-2">50+</div>
                <div className="text-sm text-brand-600">Combined Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-700 mb-2">100%</div>
                <div className="text-sm text-brand-600">Commitment to Mission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMT;

