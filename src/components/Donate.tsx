import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission here
    console.log('Donation amount:', donationAmount);
  };

  const quickAmounts = ['5000', '10000', '25000', '50000'];

  return (
    <section id="donate" className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Your donation helps us continue our vital work in communities across Nigeria. 
            Every contribution makes a difference in the lives of vulnerable populations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donation Form */}
          <div className="card p-8 bg-white/10 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Make a Donation
            </h3>
            
            <form onSubmit={handleDonationSubmit} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-semibold text-white mb-2">
                  Donation Amount (₦)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors"
                />
              </div>

              {/* Quick Amount Buttons */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Quick Amounts:</p>
                <div className="grid grid-cols-2 gap-3">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium transition-colors"
                    >
                      ₦{parseInt(amount).toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary-700 hover:bg-white/90 font-bold py-4 rounded-lg transition-colors"
              >
                Donate Now
              </button>
            </form>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Your Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">₦5,000</h4>
                    <p className="text-white/80 text-sm">Provides food for a family for one week</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">₦10,000</h4>
                    <p className="text-white/80 text-sm">Supports education for one child for a month</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">₦25,000</h4>
                    <p className="text-white/80 text-sm">Provides clean water access for a community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-white mb-4">Bank Transfer Details</h4>
              <div className="space-y-2 text-sm text-white/90">
                <p><strong>Bank:</strong> [Bank Name]</p>
                <p><strong>Account Name:</strong> Care First Community Initiative</p>
                <p><strong>Account Number:</strong> [Account Number]</p>
                <p><strong>Sort Code:</strong> [Sort Code]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;

