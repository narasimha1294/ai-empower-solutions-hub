
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Example partner data - replace with your actual partners
const partners = [
  {
    category: "tech",
    name: "TechCorp Global",
    logo: "https://via.placeholder.com/150x80?text=TechCorp",
    description: "Leading enterprise software solutions provider."
  },
  {
    category: "tech",
    name: "InnovateTech",
    logo: "https://via.placeholder.com/150x80?text=InnovateTech",
    description: "Cutting-edge AI research and development."
  },
  {
    category: "finance",
    name: "FinanceWise",
    logo: "https://via.placeholder.com/150x80?text=FinanceWise",
    description: "Financial services technology innovation."
  },
  {
    category: "finance",
    name: "Global Banking",
    logo: "https://via.placeholder.com/150x80?text=GlobalBanking",
    description: "International financial services organization."
  },
  {
    category: "healthcare",
    name: "HealthSolutions",
    logo: "https://via.placeholder.com/150x80?text=HealthSolutions",
    description: "Healthcare technology and services provider."
  },
  {
    category: "healthcare",
    name: "MediTech Innovations",
    logo: "https://via.placeholder.com/150x80?text=MediTech",
    description: "Medical technology research and implementation."
  },
];

const categories = [
  { value: "all", label: "All Partners" },
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredPartners = activeCategory === "all" 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">
            We collaborate with industry leaders to deliver exceptional AI solutions
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner, index) => (
                  <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="max-h-full"
                          />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Partners;
