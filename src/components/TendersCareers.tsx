import React, { useState } from 'react';

const TendersCareers: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const careers = [
    {
      id: '1',
      title: 'Internal Compliance Officer',
      location: 'Maiduguri',
      type: 'Contract',
      level: 'Mid-level',
      deadline: '27th February 2026',
      status: 'Open',
      description: 'Ensure organizational compliance with internal policies, donor requirements, and applicable laws. Conduct internal audits, risk assessments, and promote accountability across all operations.',
      requirements: [
        'Bachelor\'s degree in Law, Accounting, Finance, Business Administration, or related field',
        'Minimum 3 years experience in compliance, audit, risk management, or internal control',
        'Strong knowledge of compliance frameworks and internal control systems',
        'Excellent analytical, reporting, and documentation skills',
        'High level of integrity, confidentiality, and professionalism'
      ],
      responsibilities: [
        'Ensure compliance with organizational policies and regulatory requirements',
        'Monitor adherence to donor, financial, procurement, and operational guidelines',
        'Conduct internal compliance reviews, audits, and spot checks',
        'Identify compliance risks and recommend corrective actions',
        'Prepare compliance reports and submit findings to management',
        'Support staff through compliance guidance, training, and awareness sessions'
      ],
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeIeNxWvskjYqd-Rmr_X58d5eKjmfnSm5xO5DuIAAq5yF8Nsg/viewform?usp=publish-editor',
      email: 'hrofficer@cfci-ng.org'
    }
  ];

  return (
    <section id="tenders-careers" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Careers
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Explore career openings at Care First Community Initiative.
          </p>
        </div>

        {/* Careers Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              Career Opportunities
            </h3>
            <span className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              {careers.length} Positions
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((career, index) => (
              <div 
                key={career.id}
                className="card p-6 group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-secondary-700 bg-secondary-50 px-3 py-1 rounded-full">
                    View Details
                  </span>
                </div>

                <h4 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {career.title}
                </h4>

                <div className="flex items-center space-x-2 text-brand-600 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{career.location}</span>
                </div>

                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  {career.description}
                </p>

                <div className="pt-4 border-t border-brand-200 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-600 font-medium">Application Deadline:</span>
                    <span className="text-brand-900 font-semibold">{career.deadline}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCareer(selectedCareer === career.id ? null : career.id)}
                    className="w-full btn bg-primary-600 hover:bg-primary-700 text-white text-sm py-2 transition-colors duration-200"
                  >
                    {selectedCareer === career.id ? 'Hide Details' : 'View Full Details'}
                  </button>
                </div>

                {/* Expanded Details Section */}
                {selectedCareer === career.id && (
                  <div className="mt-6 pt-6 border-t border-brand-200 animate-fade-in">
                    <div className="space-y-6">
                      {/* Job Summary */}
                      <div>
                        <h5 className="text-lg font-bold text-brand-900 mb-3">Job Summary</h5>
                        <p className="text-brand-700 text-sm leading-relaxed">
                          We are seeking a detail-oriented and highly ethical Internal Compliance Officer to ensure that the organization operates in full compliance with internal policies, donor requirements, and applicable laws and regulations. The role is critical in promoting accountability, transparency, and risk management across all operations.
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div>
                        <h5 className="text-lg font-bold text-brand-900 mb-3">Key Responsibilities</h5>
                        <ul className="space-y-2">
                          {career.responsibilities?.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-brand-700 text-sm">
                              <span className="text-primary-600 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Investigate reported non-compliance issues and follow up on resolutions</span>
                          </li>
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Liaise with auditors, regulators, and management when required</span>
                          </li>
                        </ul>
                      </div>

                      {/* Qualifications & Requirements */}
                      <div>
                        <h5 className="text-lg font-bold text-brand-900 mb-3">Qualifications & Requirements</h5>
                        <ul className="space-y-2">
                          {career.requirements?.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-brand-700 text-sm">
                              <span className="text-primary-600 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Strong communication and interpersonal skills</span>
                          </li>
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Ability to work independently and meet deadlines</span>
                          </li>
                        </ul>
                      </div>

                      {/* Desirable Skills */}
                      <div>
                        <h5 className="text-lg font-bold text-brand-900 mb-3">Desirable Skills</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Experience working with NGOs, development projects, or donor-funded programs</span>
                          </li>
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Knowledge of financial and procurement compliance standards</span>
                          </li>
                          <li className="flex items-start space-x-2 text-brand-700 text-sm">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>Professional certifications (ICAN, ACCA, CIA, or related) are an added advantage</span>
                          </li>
                        </ul>
                      </div>

                      {/* Employment Details */}
                      <div className="bg-primary-50 rounded-lg p-4">
                        <h5 className="text-lg font-bold text-brand-900 mb-3">Employment Details</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-brand-600 font-medium">Employment Type:</span>
                            <p className="text-brand-900">Contract (Possible Extension)</p>
                          </div>
                          <div>
                            <span className="text-brand-600 font-medium">Location:</span>
                            <p className="text-brand-900">{career.location}</p>
                          </div>
                          <div>
                            <span className="text-brand-600 font-medium">Reports To:</span>
                            <p className="text-brand-900">Program Manager / Executive Director</p>
                          </div>
                          <div>
                            <span className="text-brand-600 font-medium">Deadline:</span>
                            <p className="text-brand-900">{career.deadline}</p>
                          </div>
                        </div>
                      </div>

                      {/* How to Apply */}
                      <div className="bg-secondary-50 rounded-lg p-4">
                        <h5 className="text-lg font-bold text-brand-900 mb-3">How to Apply</h5>
                        <p className="text-brand-700 text-sm leading-relaxed mb-4">
                          Interested and qualified candidates should submit their CV and cover letter to{' '}
                          <a href={`mailto:${career.email}`} className="text-primary-700 hover:text-primary-800 font-semibold">
                            {career.email}
                          </a>
                          {' '}with the subject line: <span className="font-semibold">"Application for Internal Compliance Officer"</span>
                        </p>
                        <p className="text-brand-700 text-sm mb-4">
                          Alternatively, you can apply online by clicking the button below:
                        </p>
                        <a 
                          href={career.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn bg-primary-600 hover:bg-primary-700 text-white text-sm py-3 inline-block text-center transition-colors duration-200 font-semibold"
                        >
                          Apply Now Online
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default TendersCareers;
