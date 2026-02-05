import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: '1',
      title: 'WASH Facilities Monitoring at GSS IDPs Camp',
      date: 'February 3, 2026',
      excerpt: 'CFCI conducted comprehensive monitoring of WASH facilities at GSS IDPs Camp in Gwoza LGA, assessing 88 latrine blocks and 9 boreholes to identify urgent rehabilitation needs.',
      category: 'Field Monitoring',
      image: '/assets/activity-2.png',
      featured: true
    },
    {
      id: '2',
      title: 'CFCI Launches New Food Security Initiative',
      date: 'Coming Soon',
      excerpt: 'Stay tuned for updates on our latest programs and initiatives aimed at improving food security in vulnerable communities.',
      category: 'Program Launch',
      image: '/assets/activity-1.png',
      featured: false
    },
    {
      id: '3',
      title: 'Community Empowerment Success Stories',
      date: 'Coming Soon',
      excerpt: 'Read about the inspiring stories of communities we have supported and the positive changes they are experiencing.',
      category: 'Impact Stories',
      image: '/assets/activity-3.png',
      featured: false
    }
  ];

  return (
    <section id="news" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest News
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and stories from Care First Community Initiative.
          </p>
        </div>

        {/* Featured News */}
        {newsItems.filter(item => item.featured).map((item) => (
          <div 
            key={item.id}
            className="card overflow-hidden mb-12 animate-fade-in"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex items-center space-x-2 text-sm text-brand-600 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{item.date}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-brand-700 leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                {/* WASH Monitoring Details */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-brand-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Monitoring Findings
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Latrine Blocks */}
                    <div>
                      <h5 className="font-semibold text-brand-900 mb-3 text-sm">Latrine Blocks (88 Total)</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Functional
                          </span>
                          <span className="font-bold text-green-700">6</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Not Functional
                          </span>
                          <span className="font-bold text-red-700">82</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            Partially Damaged
                          </span>
                          <span className="font-bold text-orange-700">53</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-red-700 rounded-full mr-2"></span>
                            Completely Damaged
                          </span>
                          <span className="font-bold text-red-900">29</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Due for Dislodgement
                          </span>
                          <span className="font-bold text-purple-700">53</span>
                        </div>
                      </div>
                    </div>

                    {/* Boreholes */}
                    <div>
                      <h5 className="font-semibold text-brand-900 mb-3 text-sm">Boreholes & Hand Pumps (9 Total)</h5>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Functional
                          </span>
                          <span className="font-bold text-green-700">6</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brand-700 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Not Functional
                          </span>
                          <span className="font-bold text-red-700">3</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-xs">
                        <p className="text-brand-700 font-medium mb-1">Required Repairs:</p>
                        <ul className="space-y-1 text-brand-600">
                          <li>• 2 overhead tanks + stand (1 borehole)</li>
                          <li>• 24 head taps (2 boreholes)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-primary-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">GSS IDPs Camp, Gwoza LGA</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other News */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.filter(item => !item.featured).map((item, index) => (
            <div 
              key={item.id}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-brand-600 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-brand-700 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <button className="text-primary-700 hover:text-primary-800 font-medium text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200">
                  <span>Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-brand-700 font-medium">More news updates coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
