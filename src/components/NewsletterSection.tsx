
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Thank you for subscribing!",
        description: "You've successfully subscribed to our newsletter.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 bg-circuit-bg text-white relative" id="newsletter">
      <div 
        className="absolute inset-0 bg-image opacity-40 bg-cover bg-center"
        style={{backgroundImage: "url('/src/images/Subscribe_BG.png')"}}
      ></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="" id="subscribeContent">
          <div id="subscribetext">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our AI</h2>
            <p className="text-lg mb-8">
              Lead with AI. Scale with Culture. Win with Clarity. Subscribe for weekly insights to build the company the future demands.
            </p>
          </div>
          <div id="subscribeform">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-newsletter bg-white/10 border-white/20 text-white placeholder:text-white/60 px-3 py-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE NOW"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
