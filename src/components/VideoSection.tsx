import React from 'react';

interface Video {
  url: string;
  title: string;
  description: string;
}

const videos: Video[] = [
  {
    url: 'https://res.cloudinary.com/dejlekubm/video/upload/v1779100759/cfci_activities_svyk4r.mp4',
    title: 'CFCI Field Activities Overview',
    description:
      'This video showcases our comprehensive field activities including WASH programs, ' +
      'logistics operations, community engagement, and humanitarian interventions across ' +
      'various locations in Nigeria. See firsthand how our dedicated team works to ' +
      'alleviate suffering and restore dignity in crisis-affected communities.',
  },
  {
    url: 'https://res.cloudinary.com/dejlekubm/video/upload/v1792401896/logistics_cluster_xrzw7z.mp4',
    title: 'Strengthening Humanitarian Logistics in Northeast Nigeria: The Logistics Cluster in Action',
    description:
      'The Logistics Cluster plays a vital role in strengthening humanitarian operations across ' +
      'Northeast Nigeria by providing essential logistics and telecommunications support to ' +
      'humanitarian organizations responding to emergencies. Through its facilities and operational ' +
      'partnerships, the cluster supports the storage, management, and timely distribution of ' +
      'critical relief supplies to vulnerable communities.',
  },
];

const ShareIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const DownloadIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: 'Watch Care First Community Initiative in action across Nigeria',
          url: window.location.href + '#our-work-in-action',
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href + '#our-work-in-action');
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">
      {/* Video number badge */}
      <div className="relative bg-black">
        <div className="absolute top-4 left-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Video {index + 1}
        </div>
        <video
          className="w-full aspect-video"
          controls
          preload="metadata"
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Info */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-brand-900 mb-3 leading-snug">
          {video.title}
        </h3>
        <p className="text-brand-700 leading-relaxed text-sm md:text-base flex-1 mb-6">
          {video.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            <ShareIcon />
            <span>Share</span>
          </button>

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-brand-100 hover:bg-brand-200 text-brand-900 px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            <DownloadIcon />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const VideoSection: React.FC = () => {
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

        {/* Two-column video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
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
