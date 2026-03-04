import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  placeholder: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('WASH');

  const categories = ['WASH'];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Latrine Assessment - Ajari IDPs Camp',
      description: 'Comprehensive evaluation of latrine facilities in Ajari IDPs Camp, Gwoza LGA. Assessment revealed 4 functional latrine blocks requiring dislodgement to maintain proper sanitation standards for displaced communities.',
      category: 'WASH',
      location: 'Gwoza LGA - Ajari Camp',
      date: 'January 10, 2026',
      placeholder: 'Latrine Assessment',
      image: '/assets/latrine.jpeg'
    },
    {
      id: '2',
      title: 'Functional Latrine Facilities',
      description: 'Documenting functional latrine blocks serving displaced communities. These facilities represent critical infrastructure maintaining hygiene and dignity for IDPs in Gwoza Wakane Ward.',
      category: 'WASH',
      location: 'Gwoza LGA - Ajari Camp',
      date: 'January 10, 2026',
      placeholder: 'Functional Latrines',
      image: '/assets/wash2.jpeg'
    },
    {
      id: '3',
      title: 'WASH Assessment - 20 Housing Camp',
      description: 'Large-scale WASH facility assessment covering 36 latrine blocks across four zones in 20 Housing IDPs Camp, serving over 5,400 households with critical sanitation infrastructure.',
      category: 'WASH',
      location: 'Gwoza LGA - 20 Housing Camp',
      date: 'February 11, 2026',
      placeholder: 'Camp Assessment',
      image: '/assets/washGwoza.jpeg'
    },
    {
      id: '4',
      title: 'Zone-Based Sanitation Survey',
      description: 'Systematic assessment of latrine conditions across Zone A, B, C, and D in 20 Housing IDPs Camp, identifying maintenance priorities and functionality status for optimal WASH service delivery.',
      category: 'WASH',
      location: 'Gwoza LGA - 20 Housing Camp',
      date: 'February 11, 2026',
      placeholder: 'Zone Survey',
      image: '/assets/wash4.jpeg'
    },
    {
      id: '5',
      title: 'Partially Damaged Latrine Documentation',
      description: 'Assessment findings showing 12 partially damaged latrine blocks requiring rehabilitation. These facilities highlight the need for ongoing maintenance to ensure sustainable WASH services.',
      category: 'WASH',
      location: 'Gwoza LGA - 20 Housing Camp',
      date: 'February 11, 2026',
      placeholder: 'Damage Assessment',
      image: '/assets/partially.jpeg'
    },
    {
      id: '6',
      title: 'WASH Facility Analysis',
      description: 'Documentation of 10 non-functional latrine blocks requiring immediate attention. This assessment informs prioritization of rehabilitation efforts to restore essential sanitation services.',
      category: 'WASH',
      location: 'Gwoza LGA - 20 Housing Camp',
      date: 'February 11, 2026',
      placeholder: 'Facility Analysis',
      image: '/assets/nonfunctional.jpeg'
    },
    {
      id: '7',
      title: 'Community WASH Impact Documentation',
      description: 'Visual documentation of WASH program impact on displaced communities. These images capture the real-world implementation of sanitation solutions and their importance for community health and dignity.',
      category: 'WASH',
      location: 'Gwoza LGA',
      date: 'January-February 2026',
      placeholder: 'Community Impact',
      image: '/assets/wash7.jpeg'
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

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
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-200 via-secondary-200 to-brand-200 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
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
