import React from 'react';
import { activities } from '@/data/constants';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-brand-600 max-w-3xl mx-auto">
            See CFCI in action through our community engagement, awareness campaigns, 
            and capacity building initiatives across Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/img/placeholders/activity-placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    {activity.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-brand-600 leading-relaxed">
                  {activity.description}
                </p>
                
                {/* Action button */}
                <div className="mt-4">
                  <button className="text-primary-700 hover:text-primary-800 font-medium text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Making a Difference
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              These activities represent just a snapshot of our ongoing work. From awareness 
              campaigns to direct service delivery, every initiative is designed to create 
              lasting positive change in the communities we serve.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-90">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Communities Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
