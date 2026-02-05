import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  placeholder: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Food Security', 'WASH', 'Education', 'Health', 'Protection', 'Community Engagement'];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Food Distribution Program',
      description: 'CFCI team distributing food packages to vulnerable families in displaced communities, ensuring access to nutritious meals.',
      category: 'Food Security',
      location: 'Borno State',
      date: '2024',
      placeholder: 'Food Distribution'
    },
    {
      id: '2',
      title: 'Clean Water Access Initiative',
      description: 'Installation of water points providing clean and safe drinking water to communities affected by water scarcity.',
      category: 'WASH',
      location: 'Adamawa State',
      date: '2024',
      placeholder: 'Water Access'
    },
    {
      id: '3',
      title: 'Children Education Support',
      description: 'Providing educational materials and learning support to children in underserved communities to promote quality education.',
      category: 'Education',
      location: 'Yobe State',
      date: '2024',
      placeholder: 'Education'
    },
    {
      id: '4',
      title: 'Health Awareness Campaign',
      description: 'Community health workers conducting awareness sessions on hygiene practices and disease prevention in rural areas.',
      category: 'Health',
      location: 'Borno State',
      date: '2024',
      placeholder: 'Health Campaign'
    },
    {
      id: '5',
      title: 'Women Empowerment Workshop',
      description: 'Skills training and empowerment sessions for women, focusing on livelihood development and economic independence.',
      category: 'Protection',
      location: 'Jere LGA',
      date: '2024',
      placeholder: 'Women Empowerment'
    },
    {
      id: '6',
      title: 'Community Dialogue Session',
      description: 'Facilitating community dialogues to promote peace, social cohesion, and conflict resolution among diverse groups.',
      category: 'Community Engagement',
      location: 'Maiduguri',
      date: '2024',
      placeholder: 'Community Dialogue'
    },
    {
      id: '7',
      title: 'Nutrition Screening Program',
      description: 'Conducting nutrition assessments and providing therapeutic feeding for malnourished children in crisis-affected areas.',
      category: 'Food Security',
      location: 'Borno State',
      date: '2024',
      placeholder: 'Nutrition Program'
    },
    {
      id: '8',
      title: 'Hygiene Promotion Activities',
      description: 'Teaching proper handwashing techniques and hygiene practices to prevent disease transmission in communities.',
      category: 'WASH',
      location: 'Adamawa State',
      date: '2024',
      placeholder: 'Hygiene Promotion'
    },
    {
      id: '9',
      title: 'School Rehabilitation Project',
      description: 'Renovating and equipping schools to create safe and conducive learning environments for children.',
      category: 'Education',
      location: 'Yobe State',
      date: '2024',
      placeholder: 'School Project'
    },
    {
      id: '10',
      title: 'Mobile Health Clinic',
      description: 'Providing primary healthcare services through mobile clinics reaching remote and underserved communities.',
      category: 'Health',
      location: 'Borno State',
      date: '2024',
      placeholder: 'Mobile Clinic'
    },
    {
      id: '11',
      title: 'GBV Prevention Training',
      description: 'Training community members on gender-based violence prevention, response mechanisms, and survivor support.',
      category: 'Protection',
      location: 'Maiduguri',
      date: '2024',
      placeholder: 'GBV Training'
    },
    {
      id: '12',
      title: 'Youth Engagement Forum',
      description: 'Engaging youth in community development activities and providing platforms for their voices to be heard.',
      category: 'Community Engagement',
      location: 'Jere LGA',
      date: '2024',
      placeholder: 'Youth Forum'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            Explore our field work through images showcasing our programs, activities, and the 
            communities we serve across Nigeria.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-white text-primary-700 shadow-md'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary-200 via-secondary-200 to-brand-200 overflow-hidden">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg 
                      className="w-16 h-16 text-white/40 mx-auto mb-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-white/60 font-semibold text-sm">
                      {item.placeholder}
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-primary-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-brand-600 pt-3 border-t border-brand-200">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Gallery;
