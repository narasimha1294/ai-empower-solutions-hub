
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">AI Empower</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-ai-blue transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" variant="default">
            Get Started
          </Button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-gray-700 hover:text-ai-blue p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full w-full bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-ai-blue transition-colors px-4 py-2 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="mx-4" onClick={() => {
              toggleMenu();
              document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
            }}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
