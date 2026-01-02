import { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-8 lg:py-16 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/10 to-primary-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-300/8 to-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-xs bg-white px-3 py-1 rounded-full shadow-lg shadow-primary-600/20 border border-primary-200">
              About Us
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content with Show More/Less */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-primary-600/10 border border-primary-100/50 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-lg text-neutral-800 font-semibold mb-4 text-center leading-relaxed">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Prakhar Foods
                </span> - Your trusted partner in premium food solutions since 2013.
              </p>
              
              <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
                Built on quality, reliability, and customer trust, we serve households, retailers, and businesses with premium food essentials across Madhya Pradesh and neighboring states.
              </p>

              {/* Expandable Content */}
              {showMore && (
                <div className="space-y-4 mb-4">
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong className="text-primary-700">Our Journey:</strong> Starting as a small family business in 2013, Prakhar Foods has grown into a trusted name in the food industry. We began with a simple mission - to provide fresh, high-quality food products to our local community in Indore.
                  </p>
                  
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong className="text-primary-700">What We Offer:</strong> We specialize in premium frozen vegetables, fresh exotic produce, ready-to-eat meals, and specialty food items. Our product range includes brands like McCain, Lee Kum Kee, Golden Crown, and Monk Foods, ensuring variety and quality for every customer need.
                  </p>
                  
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong className="text-primary-700">Our Commitment:</strong> Every product we deliver meets strict quality standards. We maintain proper cold chain management, ensure freshness through careful handling, and provide reliable delivery services. Our team is dedicated to building long-term relationships with customers through consistent service excellence.
                  </p>
                  
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong className="text-primary-700">Service Areas:</strong> Based in Indore, we proudly serve customers across Madhya Pradesh and neighboring states. Whether you're a restaurant owner, retailer, or household customer, we provide flexible ordering options and reliable delivery services.
                  </p>
                  
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong className="text-primary-700">Why Choose Us:</strong> With over a decade of experience, we understand the food industry's demands. Our customers choose us for our competitive pricing, consistent quality, professional service, and the trust we've built through years of reliable partnerships.
                  </p>
                </div>
              )}
              
              {/* Show More/Less Button */}
              <div className="text-center mb-4">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transform hover:scale-105"
                >
                  {showMore ? (
                    <>
                      Show Less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              
              <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-4 border border-primary-200/50">
                <p className="text-base font-bold text-primary-700 leading-relaxed">
                  We deliver excellence, reliability, and trust in every business relationship.
                </p>
              </div>
            </div>
          </div>

          {/* Compact Key Features - Mobile Horizontal Layout */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-primary-600/10 border border-primary-100/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary-600/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-serif font-bold text-neutral-800 mb-1">Quality Assured</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Premium products since 2013</p>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-primary-600/10 border border-primary-100/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary-600/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-serif font-bold text-neutral-800 mb-1">Trusted Partner</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Reliable food solutions</p>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-primary-600/10 border border-primary-100/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary-600/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-serif font-bold text-neutral-800 mb-1">Easy Payments</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Multiple payment options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;