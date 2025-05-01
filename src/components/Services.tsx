
import { Code, GraduationCap, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <Zap className="h-10 w-10 text-ai-blue" />,
    title: "AI Integration Solutions",
    description: "Custom AI implementation strategies tailored to your business needs and existing IT infrastructure."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-ai-purple" />,
    title: "Executive AI Training",
    description: "Specialized workshops and training sessions to help leaders understand and effectively leverage AI technologies."
  },
  {
    icon: <Code className="h-10 w-10 text-ai-indigo" />,
    title: "Technical Consulting",
    description: "Expert guidance on selecting and implementing the right AI tools and platforms for your specific challenges."
  },
  {
    icon: <Users className="h-10 w-10 text-ai-blue" />,
    title: "Change Management",
    description: "Strategies for successful organizational adaptation to new AI-powered workflows and processes."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive AI services to help your business leverage the power of artificial intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-t-4 hover:-translate-y-1" style={{ borderTopColor: index % 2 === 0 ? '#2563EB' : '#8B5CF6' }}>
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
