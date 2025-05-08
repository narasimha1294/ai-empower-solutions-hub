
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

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
          <Link to="/" className="flex items-center">
                <img src={Logo} alt="Logo" id="logoimage" />
          </Link>
          </div>
          <div id="menusection">
          <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobilevisible"
              className="text-gray-700 md:hidden mobile-menu-button"
              id="togglemenubutton"
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
            <div className="hidden md:flex space-x-6" id="desktopvisibile">
            <Link to="/#services" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Services</Link>
            <Link to="/#experience" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Advising</Link>
            <Link to="/#courses" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Masterminds</Link>
            <Link to="/executive-coaching" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Executive Coaching</Link>
            <Link to="/#newsletter" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">About</Link>
            <Link to="/#articles" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Resources</Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-decisive-blue transition-colors cursor-pointer">Testimonials</Link>
          </div>
          {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50" id="mobilevisible">
            <div className="flex flex-col p-4 space-y-2">
              <Link to="/#services" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Services</Link>
              <Link to="/#experience" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Advising</Link>
              <Link to="/#courses" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Masterminds</Link>
              <Link to="/executive-coaching" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Executive Coaching</Link>
              <Link to="/#newsletter" className="text-gray-700 hover:text-decisive-blue cursor-pointer">About</Link>
              <Link to="/#articles" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Resources</Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-decisive-blue cursor-pointer">Testimonials</Link>
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
