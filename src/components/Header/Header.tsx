import { useState, useEffect } from 'react';

// Navigation items data
const navigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for header styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-primary-600/10 border-b border-primary-100/50' 
          : 'bg-transparent'
      }`}
    >
      {/* Decorative top border */}
      <div className={`h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              {/* Logo background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl blur-lg transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`} />
              
              <h1 className={`relative text-2xl lg:text-3xl font-serif font-bold transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? 'text-neutral-800' : 'text-white drop-shadow-lg'
              }`}>
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Prakhar
                </span>
                <span className={`ml-2 ${isScrolled ? 'text-neutral-700' : 'text-white'}`}>
                  Foods
                </span>
              </h1>
              
              {/* Decorative underline */}
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'w-8' : 'w-6'
              }`} />
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item: NavigationItem, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group hover:scale-105 ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-primary-600 bg-primary-50 shadow-lg shadow-primary-600/20' 
                      : 'text-primary-300 bg-white/10 backdrop-blur-sm'
                    : isScrolled 
                      ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                
                {/* Enhanced active indicator */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-lg">
                    <div className={`absolute inset-0 rounded-lg ${
                      isScrolled 
                        ? 'bg-gradient-to-r from-primary-500/10 to-primary-600/10' 
                        : 'bg-white/20'
                    }`} />
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                      isScrolled ? 'bg-primary-600' : 'bg-white'
                    }`} />
                  </div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600 shadow-lg shadow-neutral-200/50' 
                : 'text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`} />
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl shadow-primary-600/10 border border-primary-100/50">
            {navigationItems.map((item: NavigationItem, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`block w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
                  activeSection === item.id
                    ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-primary-100 border-r-4 border-primary-600'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'bg-primary-600 scale-100' : 'bg-neutral-300 scale-75'
                  }`} />
                  {item.label}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;