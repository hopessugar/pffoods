import React from 'react';

const JustDial: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-neutral-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200/15 to-primary-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-primary-300/10 to-primary-400/5 rounded-full blur-2xl" />
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 via-primary-50 to-primary-100/50 rounded-3xl blur-xl" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary-600/10 border border-primary-100/50">
              {/* JustDial icon with enhanced styling */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-8 shadow-lg shadow-primary-600/30 hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-800 mb-6 leading-tight">
                Find Us on{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  JustDial
                </span>
              </h3>
              
              <p className="text-neutral-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore our comprehensive business profile on JustDial. Access detailed information about our services, product portfolio, customer testimonials, and professional credentials.
              </p>
              
              {/* Enhanced JustDial Button */}
              <div className="mt-8">
                <a
                  href="https://jsdl.in/DT-29IQEMMU2U2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/30 shadow-lg shadow-primary-600/20"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-lg">Visit JustDial Profile</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-neutral-600 font-medium">Verified Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-neutral-600 font-medium">Trusted Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustDial;