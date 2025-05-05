
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6" style={{display: "flex", justifyContent: "space-between"}} id="footersection">
        <div className="text-center mb-8">
          <p className="text-sm">© {new Date().getFullYear()} Thakur International - All Rights Reserved.</p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
