
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const Index = () => {
  // Replace with your actual Google Analytics Measurement ID
  const gaMeasurementId = "G-XXXXXXXXXX";
  
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics measurementId={gaMeasurementId} />
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
