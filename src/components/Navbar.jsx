import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Briefcase, Mail, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, description: 'Welcome & Introduction' },
    { id: 'about', label: 'About', icon: User, description: 'My Story & Skills' },
    { id: 'projects', label: 'Work', icon: Briefcase, description: 'Portfolio & Projects' },
    { id: 'contacts', label: 'Contact', icon: Mail, description: 'Get In Touch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Separate useEffect for click outside and escape key handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle if mobile menu is open
      if (!isMobileMenuOpen) return;
      
      // Check if the clicked element is the menu button or its children
      const menuButton = document.querySelector('[data-menu-button]');
      if (menuButton && (menuButton === event.target || menuButton.contains(event.target))) {
        return; // Don't close if clicking the menu button
      }
      
      // Check if click is outside sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Only add listeners when mobile menu is open
    if (isMobileMenuOpen) {
      // Use a small delay to prevent immediate closure from the same click that opened it
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isMobileMenuOpen]); // Re-run when isMobileMenuOpen changes

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavLinkClick = (id) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 lg:h-20'>
            {/* Logo section */}
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white font-bold text-lg'>NF</span>
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>
                  Nathaniel{' '}
                  <span className='font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                    Faa
                  </span>
                </h1>
              </div>
            </div>

            {/* Desktop navigation links */}
            <div className='hidden md:flex items-center space-x-2'>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer group ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActiveSection(item.id)}
                  >
                    <span className='flex items-center space-x-2'>
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'opacity-100 scale-110' 
                          : 'opacity-60 group-hover:opacity-100 group-hover:scale-105'
                      }`} />
                      <span>{item.label}</span>
                    </span>
                    {activeSection === item.id && (
                      <div className='absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full animate-pulse' />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              data-menu-button
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'bg-blue-50 text-blue-600 scale-95' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className={`w-5 h-5 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-all duration-500 ease-out md:hidden border-l border-gray-200 ${
          isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Sidebar Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-100'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>NF</span>
            </div>
            <h2 id="mobile-menu-title" className='text-lg font-semibold text-gray-900'>
              Navigation
            </h2>
          </div>
          <button
            onClick={closeMobileMenu}
            className='p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200'
            aria-label="Close mobile menu"
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className='flex flex-col p-4 space-y-1' role="navigation">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                className={`group flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer transform ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm scale-[0.98] border border-blue-100'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-[0.99]'
                } animate-in slide-in-from-right-2`}
                style={{ animationDelay: `${index * 100}ms` }}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                onClick={() => handleMobileNavLinkClick(item.id)}
              >
                <div className='flex items-center space-x-4'>
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    <Icon className='w-5 h-5' />
                  </div>
                  <div>
                    <div className='font-medium'>{item.label}</div>
                    <div className={`text-xs transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : 'text-gray-500 group-hover:text-gray-600'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-500 transform rotate-90'
                    : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50'>
          <div className='text-center'>
            <p className='text-sm text-gray-600 mb-2'>Ready to connect?</p>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleMobileNavLinkClick('contacts')}
              className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer'
            >
              <Mail className='w-4 h-4' />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;