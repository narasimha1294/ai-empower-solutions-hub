
import { BadgeCheck, Star } from "lucide-react";

const achievementsData = [
  {
    stat: "25+",
    label: "Businesses Transformed"
  },
  {
    stat: "98%",
    label: "Client Satisfaction Rate"
  },
  {
    stat: "500+",
    label: "Executives Trained"
  },
  {
    stat: "10+",
    label: "Years of Experience"
  }
];

const testimonialsData = [
  {
    quote: "Working with this team transformed our approach to automation. The AI solutions they implemented have increased our efficiency by 40%.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp Global",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The executive training program gave our leadership team the confidence to make strategic decisions about AI implementation across departments.",
    author: "Michael Chang",
    position: "CEO, InnovateFinance",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600">
            Driving measurable results for businesses through strategic AI adoption
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:transform hover:-translate-y-1">
              <p className="text-4xl font-bold gradient-text mb-2">{item.stat}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute -top-3 -left-3">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </div>
                <blockquote className="mb-4 text-gray-700">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Achievements</h3>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-4">AI Transformation Excellence Award</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-ai-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Recognized for outstanding AI implementation strategies</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-ai-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Demonstrated measurable business impact for clients</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-ai-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Industry-leading approach to AI adoption</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-ai-indigo p-8 text-white flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-4">Our Impact By Numbers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                      <span>40% average efficiency increase for clients</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                      <span>$5M+ in cost savings achieved for partners</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                      <span>30% reduction in processing time across industries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
