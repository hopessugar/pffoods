const TrustedPartner = () => {
  return (
    <section className="py-8 lg:py-16 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/10 to-primary-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-300/8 to-primary-400/5 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #ae7c40 25%, transparent 25%), linear-gradient(-45deg, #ae7c40 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ae7c40 75%), linear-gradient(-45deg, transparent 75%, #ae7c40 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-600/15 to-primary-700/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-6 lg:p-12 text-white shadow-2xl shadow-primary-600/25 border border-primary-500/20 overflow-hidden">
              {/* Decorative elements inside the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-400/20 to-transparent rounded-full blur-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 leading-tight">
                  Your Strategic Partner in 
                  <span className="block bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent">
                    Food Solutions
                  </span>
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-primary-100 mb-6 text-base lg:text-lg leading-relaxed">
                    For over a decade, Prakhar Foods has been the preferred choice for businesses and households seeking reliable, high-quality food solutions. Our commitment to excellence spans from premium frozen products to specialty selections.
                  </p>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-white mb-1">10+ Years</h4>
                    <p className="text-primary-200 text-xs">excellence</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-white mb-1">Premium</h4>
                    <p className="text-primary-200 text-xs">quality</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-white mb-1">Professional</h4>
                    <p className="text-primary-200 text-xs">service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;