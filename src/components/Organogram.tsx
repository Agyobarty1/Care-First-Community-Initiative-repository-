import React from 'react';

const Organogram: React.FC = () => {
  return (
    <section id="organogram" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
              Organizational Structure
            </h2>
            <p className="text-lg text-brand-600 leading-relaxed">
              Our organizational structure reflects our commitment to transparency, 
              accountability, and effective governance. The organogram below shows 
              how we organize our teams and reporting relationships to maximize 
              our impact and efficiency.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900">Key Departments:</h3>
              <ul className="space-y-2 text-brand-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Executive Leadership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Programs & Operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Finance & Administration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Monitoring & Evaluation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Partnerships & Grants</span>
                </li>
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
              <h4 className="font-bold text-brand-900 mb-3">Image Replacement Instructions:</h4>
              <ul className="text-sm text-brand-700 space-y-2">
                <li>• Replace <code className="bg-white px-2 py-1 rounded text-xs">/assets/img/organogram.png</code> with your organogram image</li>
                <li>• Recommended format: PNG, JPG, or SVG</li>
                <li>• Recommended dimensions: 1200x800px or similar 3:2 aspect ratio</li>
                <li>• Ensure text is readable at different screen sizes</li>
              </ul>
            </div>
          </div>

          {/* Organogram Image */}
          <div className="relative">
            <div className="card p-6">
              <div className="aspect-[3/2] bg-gradient-to-br from-brand-50 to-primary-50 rounded-xl border-2 border-dashed border-brand-300 flex items-center justify-center">
                <img 
                  src="/assets/img/organogram.png" 
                  alt="CFCI Organizational Structure"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden flex-col items-center justify-center text-center p-8"
                  style={{ display: 'none' }}
                >
                  <svg className="w-16 h-16 text-brand-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-lg font-bold text-brand-700 mb-2">Organogram Placeholder</h3>
                  <p className="text-brand-600 text-sm">
                    Replace this with your organizational structure diagram
                  </p>
                </div>
              </div>
            </div>
            
            {/* Download button */}
            <div className="mt-4 text-center">
              <button className="btn btn-outline text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Organogram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organogram;
