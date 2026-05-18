import React from 'react';

const VideoSection: React.FC = () => {
  const videoUrl = 'https://res.cloudinary.com/dejlekubm/video/upload/v1779100759/cfci_activities_svyk4r.mp4';

  const shareVideo = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CFCI Field Activities',
          text: 'Watch Care First Community Initiative in action across Nigeria',
          url: window.location.href + '#our-work-in-action'
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href + '#our-work-in-action');
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="our-work-in-action" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Witness our field activities and see how Care First Community Initiative is making a 
            real difference in communities across Nigeria.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
              poster="https://res.cloudinary.com/dejlekubm/image/upload/v1779100759/cfci_activities_poster_svyk4r.jpg"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Info */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-900 mb-4">
              CFCI Field Activities Overview
            </h3>
            <p className="text-brand-700 leading-relaxed mb-6">
              This video showcases our comprehensive field activities including WASH programs, 
              logistics operations, community engagement, and humanitarian interventions across 
              various locations in Nigeria. See firsthand how our dedicated team works to 
              alleviate suffering and restore dignity in crisis-affected communities.
            </p>

            {/* Share Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={shareVideo}
                className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share This Video</span>
              </button>
              
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-brand-100 hover:bg-brand-200 text-brand-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Video</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="font-bold">Community Impact</h4>
            </div>
            <p className="text-sm opacity-90">
              Direct engagement with communities to understand their needs and deliver targeted assistance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h4 className="font-bold">Quality Standards</h4>
            </div>
            <p className="text-sm opacity-90">
              Maintaining high standards in program delivery and accountability to our beneficiaries.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-bold">Rapid Response</h4>
            </div>
            <p className="text-sm opacity-90">
              Quick deployment of resources and personnel to address urgent humanitarian needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
