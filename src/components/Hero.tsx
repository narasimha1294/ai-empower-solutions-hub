
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 md:pt-40 bg-gradient-to-b from-ai-bg to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Transforming Business With
              <span className="gradient-text block"> AI Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              We help IT firms and business leaders seamlessly integrate AI into their workflows, 
              driving innovation and enhancing productivity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="AI Technology" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
