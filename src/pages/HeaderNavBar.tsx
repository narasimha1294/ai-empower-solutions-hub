import React, { useState } from 'react';
import Logo from '.././images/Logo.png';
const HeaderNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6" >
        <div id="menucontent">
        <div id="menuitems">
        <div id="#imagesection">
          <a href="/" className="flex items-center">
                <img src={Logo} alt="Logo" id="logoimage" />
          </a>
          </div>
          <div id="menusection">
          <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobilevisible"
              className="text-gray-700 md:hidden mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                // X Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
            <div className="hidden md:flex space-x-6" id="desktopvisible">
            <a href="#services" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Services</a>
            <a href="#experience" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Advising</a>
            <a href="#courses" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Masterminds</a>
            <a href="/executive-coaching" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Executive Coaching</a>
            <a href="#newsletter" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">About</a>
            <a href="#articles" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Resources</a>
            <a href="#testimonials" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Testimonials</a>
          </div>
          {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50" id="mobilevisible">
            <div className="flex flex-col p-4 space-y-2">
              <a href="#services" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Services</a>
              <a href="#experience" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Advising</a>
              <a href="#courses" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Masterminds</a>
              <a href="/executivecoaching.html" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Executive Coaching</a>
              <a href="#newsletter" className="text-gray-700 hover:text-decisive-blue cursor-pointer">About</a>
              <a href="#articles" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Resources</a>
              <a href="#testimonials" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Testimonials</a>
            </div>
          </div>
        )}
          </div>
        </div>
        <div id="menubuttons">
        <button className="btn-primary border-2 border-[#345dbe] bg-white text-[#345dbe]">Contact Mahesh</button>
        <button className="btn-primary" id="paynowbtn">Pay Now</button>
          </div>
        </div>
        </div>        
        
      </nav>
    </header>
  );
};

export default HeaderNavbar;
