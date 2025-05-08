
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Link } from 'react-router-dom';

const Index = () => {
  // Replace with your actual Google Analytics Measurement ID
  const gaMeasurementId = "G-XXXXXXXXXX";
  
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics measurementId={gaMeasurementId} />
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8 text-center">
        <Link to="/executive-coaching" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Learn about Executive Coaching
        </Link>
      </div>
      <Services />
      <Partners />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
