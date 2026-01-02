import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactUs = () => {
    // Open WhatsApp with the provided number
    const whatsappNumber = '+917024788478';
    const message = 'Hello! I would like to inquire about Prakhar Foods products and services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewMenu = () => {
    // Smooth scroll to menu section
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 lg:pt-16"
    >
      {/* Professional Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(46, 46, 46, 0.6), rgba(0, 0, 0, 0.8)), 
                           url('/images/hero-background.jpeg')`
        }}
      />
      
      {/* Subtle Professional Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-300/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-300/20 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary-300/30 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-primary-300/30 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          {/* Mobile-Optimized Main Headline */}
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              A World Of
              <br />
              <span className="text-primary-300 bg-gradient-to-r from-primary-300 to-primary-200 bg-clip-text text-transparent">
                Food Essentials
              </span>
            </h1>
          </div>

          {/* Mobile-Optimized Subheading */}
          <div className={`transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-base sm:text-lg text-neutral-200 mb-6 sm:mb-8 max-w-sm sm:max-w-2xl mx-auto leading-relaxed px-4">
              Your trusted partner for premium frozen foods, fresh produce, and specialty ingredients. 
              Serving businesses across Madhya Pradesh with quality and reliable service.
            </p>
          </div>

          {/* Mobile-Optimized Call-to-Action Buttons */}
          <div className={`flex flex-col gap-3 justify-center items-center transition-all duration-1000 delay-500 px-4 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleViewMenu}
              className="w-full max-w-xs bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/30 touch-target shadow-lg"
            >
              Explore Products
            </button>
            <button
              onClick={handleContactUs}
              className="w-full max-w-xs bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 touch-target backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Get In Touch
            </button>
          </div>

          {/* Mobile-Optimized Contact Information */}
          <div className={`mt-8 sm:mt-12 transition-all duration-1000 delay-700 px-4 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-neutral-300">
              <a 
                href="tel:+917024788478"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200 touch-target bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+91 7024788478</span>
              </a>
              <div className="hidden sm:block w-px h-4 bg-neutral-400" />
              <a 
                href="https://maps.app.goo.gl/75aGs9hEiufUufny5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200 touch-target bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Palda, Indore</span>
              </a>
            </div>
          </div>

          {/* Mobile-Optimized Trust Indicators */}
          <div className={`mt-10 sm:mt-16 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-300 mb-1">10+</div>
                <div className="text-xs text-neutral-300 font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-300 mb-1">3+</div>
                <div className="text-xs text-neutral-300 font-medium">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-300 mb-1">100%</div>
                <div className="text-xs text-neutral-300 font-medium">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;