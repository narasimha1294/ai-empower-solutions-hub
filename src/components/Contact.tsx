
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

// Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = "+123456789";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [subscription, setSubscription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      // In a real app, you would send this data to your backend
      console.log("Subscription email:", subscription);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to our newsletter.",
      });
      
      // Reset form
      setSubscription('');
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in learning more about your AI solutions.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Reach out to learn how we can help your business leverage AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-ai-indigo text-white">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm opacity-80">contact@aiempower.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm opacity-80">+1 123-456-7890</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="secondary" 
                    onClick={openWhatsApp}
                    className="w-full"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t">
                  <h4 className="text-lg font-medium mb-4">Subscribe to our newsletter</h4>
                  <form onSubmit={handleSubscribe} className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={subscription}
                      onChange={(e) => setSubscription(e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" disabled={isSubscribing}>
                      {isSubscribing ? "..." : "Subscribe"}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
