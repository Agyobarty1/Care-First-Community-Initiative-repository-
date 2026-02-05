import React from 'react';

const Reports: React.FC = () => {
  const reports = [
    {
      id: '1',
      title: 'Annual Report 2024',
      description: 'Comprehensive overview of our programs, impact, and financial performance for the year 2024.',
      type: 'Annual Report',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Impact Assessment Report',
      description: 'Detailed analysis of our program outcomes and the impact on beneficiary communities.',
      type: 'Impact Report',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'Financial Transparency Report',
      description: 'Transparent breakdown of our financial resources, expenditures, and accountability measures.',
      type: 'Financial Report',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: '4',
      title: 'Program Evaluation Reports',
      description: 'Sector-specific evaluations of our programs including WASH, Education, and Food Security.',
      type: 'Evaluation Report',
      year: '2024',
      status: 'Coming Soon',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="reports" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reports & Documentation
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Access our comprehensive reports showcasing our commitment to transparency, 
            accountability, and evidence-based programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reports.map((report, index) => (
            <div 
              key={report.id}
              className="card p-6 group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {report.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      {report.type}
                    </span>
                    <span className="text-sm text-brand-600 font-medium">{report.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {report.title}
                  </h3>
                  
                  <p className="text-brand-700 text-sm leading-relaxed mb-4">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-600 font-medium flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{report.status}</span>
                    </span>
                    
                    <button 
                      disabled
                      className="text-brand-400 font-medium text-sm flex items-center space-x-2 cursor-not-allowed"
                    >
                      <span>Download</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">
              Commitment to Transparency
            </h3>
            <p className="text-brand-700 leading-relaxed">
              We are committed to maintaining the highest standards of transparency and accountability. 
              Our reports will be regularly updated and made available to stakeholders, partners, and the 
              communities we serve. Check back soon for our latest documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
