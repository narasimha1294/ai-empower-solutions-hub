
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NewsletterSection from '@/components/NewsletterSection';
import { useState } from 'react';

const Home = () => {
  // State for testimonials
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "Mahesh's coaching approach cements his position as a thoughtful leader. He actively responds to every feedback with precision and clarity, ensuring my potential is met. He consistently upholds our learning procedures. Through thoughtful guidance and practical exercises, I'm guided to my explore my potential. From day to day, he celebrates growth mindset. One of the key strengths of Mahesh is his deep understanding of the computer landscape and the challenges executives face.",
      author: "Mark Ebner",
      role: "Leadership Mentor Havas",
    },
    {
      id: 2,
      content: "Working with Mahesh has been transformative for our organization's AI strategy. His deep knowledge and practical approach cut through the hype and delivered actionable insights that we could implement immediately.",
      author: "Sarah Johnson",
      role: "CTO, TechInnovate",
    },
    {
      id: 3,
      content: "I've attended many AI workshops, but Mahesh's programs stand out for their clarity and real-world application. He doesn't just teach theory - he shows you exactly how to apply AI concepts to drive business value.",
      author: "David Reynolds",
      role: "VP of Digital Transformation, Global Solutions",
    },
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Google Analytics */}
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-circuit-bg text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-image opacity-50 bg-cover bg-center"
          style={{backgroundImage: "url('/src/images/Banner.png')"}}
        ></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is your organization truly AI-Ready?
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Turn your AI strategy into real business results.
            </p>
            <Button 
              className="btn-primary"
              id="connect-button"
              onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}
            >
              CONNECT MAHESH
            </Button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">My Experience</h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-2/3">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-decisive-blue">
                  Mahesh M. Thakur is a top artificial intelligence leader, advisor, and investor.
                </h3>
              </div>
              
              <p className="mb-4">
                With over a decade of experience in AI, Mahesh has held Principal/Director roles at Microsoft AI, Numerify (Intel), Amazon, Intuit, and most recently as Vice President at Columbia. He has been a tech leader building AI-driven enterprises for many years, leveraging AI for consumer products, finance, legal and business domains. He is a recognized expert in the areas of AI, machine learning, generative AI and agent AI.
              </p>
              
              <p className="mb-4">
                Mahesh was one of the youngest leaders to build and scale an artificial intelligence product at Microsoft. He is a pioneer of AI applications in business domains for organizations, large and globally. At Columbia, his leadership drove over 28% year-over-year growth in the Productivity Lab, resulting with 100M+ in annual revenue. His team enabled a $1.2B total customer pipeline. He regularly advises startups, enterprise teams, and investors on their AI strategies at Microsoft.
              </p>
              
              <p className="mb-4">
                As a member of the MBA 100, the world's top 100 mentors, reputation as helping C-suite leaders to build AI-led organizations has earned him recognition and appointments to several boards. With 25 years of experience in education from all the tech companies and from Microsoft, Amazon, Intuit, and Columbia, as well as experience at a Silicon Valley startup accelerator and the US government, Mahesh is trusted for his practical advice and impactful results for leaders at billion-dollar companies.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="/src/images/MyExperience_Img.png" 
                alt="Mahesh M. Thakur" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Courses Section */}
      <section className="py-16 bg-white" id="courses">
        <div className="container mx-auto px-6 py-16" style={{backgroundImage: "url(/src/images/aicoursesBG.png)"}}>
          <h2 className="section-heading">Learn AI with Mahesh M. Thakur</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 aicourses">
            <div className="card p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-icon text-3xl" style={{justifySelf: "center"}}><img src="/src/images/Icon_01.png" alt="Productivity" /></div>
              <h3 className="text-xl font-bold mb-3">10x Your Productivity with AI</h3>
              <p className="mb-4 text-gray-600">Unlock the true potential of generative AI to drive exceptional impact in your business. Learn what AI can do today and how to stay ahead of tomorrow's advancements.</p>
              <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore">
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="card p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-icon text-3xl" style={{justifySelf: "center"}}><img src="/src/images/Icon_02.png" alt="Harnessing AI" /></div>
              <h3 className="text-xl font-bold mb-3">Harnessing Generative AI</h3>
              <p className="mb-4 text-gray-600">Revolutionary how your team works with generative AI, optimize and leverage. Learn from power tools and platforms that have saved over 2000 hours and made teams more effective.</p>
              <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore">
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="card p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-icon text-3xl" style={{justifySelf: "center"}}><img src="/src/images/Icon_03.png" alt="Thrive" /></div>
              <h3 className="text-xl font-bold mb-3">Thrive in the AI Era</h3>
              <p className="mb-4 text-gray-600">Stay ahead in the AI-driven world by learning techniques to enhance your productivity and creativity. Learn to automate routine tasks, perfect prompting.</p>
              <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore">
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Audiences Section */}
      <section style={{width: "100%", padding: "1%"}}>
        <div className="container" style={{marginBottom: "3%", background: "#F2F2F2", padding: "1%"}}>
          <h2 className="section-heading">Previous audiences</h2>
          <div id="audienceImages">
            <img src="/src/images/HP.png" alt="HP" />
            <img src="/src/images/Microsoft.png" alt="Microsoft" />
            <img src="/src/images/NVIDIA.png" alt="NVIDIA" />
            <img src="/src/images/GoDaddy_logo.png" alt="GoDaddy" />
            <img src="/src/images/Empower_Logo.png" alt="Empower" />
            <img src="/src/images/Corent-logo.png" alt="Corent" />
            <img src="/src/images/ymca-logo.png" alt="YMCA" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section>
        <div className="container">
          <h3 className="section-heading">"My mission is to help the C-Suite and teams leverage AI and leadership for scalable growth and lasting transformation.
            My mission is to energize, educate, and empower your organization to harness the power of AI and leadership."</h3>         
        </div>
      </section>

      {/* Speaking Section */}
      <section style={{background: "#063970", padding: "1%"}}>
        <div className="container" style={{color: "#fff"}}>
          <h2 className="section-heading" style={{marginBottom: "1%"}}>Speaking</h2>
          <h2 className="section-heading" style={{fontSize: "22px", fontWeight: 400}}>Mahesh M. Thakur has delivered talks on artificial intelligence, leadership and decision making around the world. To inquire about booking Mahesh as a speaker for your event, please click here to request availability.</h2>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Training Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 speakingSectionCards">
              <div className="speackingCards">
                <div className="speakingcontent">
                  <h2 className="text-2xl font-bold mb-4">Upskill your company's leadership to learn and Apply AI in business</h2>
                  <p className="text-gray-600 mb-6">
                    Guide Me Learning – Get our "AI Teams 1 Hour a Week" AI business program offer, valued specially for this high-impact training offer to drive, this exclusive private cohort will equip your team with the critical skills needed to dominate in the AI era. Don't let your organization fall behind others. This program is repeated regularly and taught guest lectured by top organizations at the forefront of AI-driven success. Through "AI-ready leadership and beyond guest sessions, this program is designed with the highest yields."
                  </p>
                </div>
                <div className="speakingbutton">
                  <Button className="btn-primary w-full">ENROLL YOUR TEAM</Button>
                </div>
              </div>
            </div>
            
            {/* AI Speaking Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 speakingSectionCards">
              <div className="speackingCards">
                <div className="speakingcontent">
                  <h2 className="text-2xl font-bold mb-4">Accelerate Your Business Growth with an AI Speaking or Advising Session</h2>
                  <p className="text-gray-600 mb-6">
                    Empower your leadership and organization to thrive in the AI-driven future with Mahesh, an internationally recognized AI expert, advisor, and speaker. Learning his key lessons from Microsoft, Amazon, and Intuit; Mahesh will guide you to discover the territory, frameworks, strategies, what's working, competitive approaches, AI products or marketplace training, startups, tackling leadership challenges, and how top executives are leveraging AI to stay ahead.
                  </p>
                </div>
                <div className="speakingbutton">
                  <Button className="btn-primary w-full">CONTACT MAHESH</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Testimonials</h2>
          
          <div className="" style={{display: "flex", flexDirection: "row"}}>
            <button id="next-testimonial" style={{width: "130px"}} onClick={handlePrevTestimonial}>
              <img src="/src/images/Testimonials_arrow-left.png" alt="Previous" />
            </button>
            <div className="bg-white rounded-lg p-8 shadow-md relative testimonial-content" style={{border: "none", borderRadius: 0}}>
              <div className="mb-6 text-gray-700 italic" style={{justifyItems: "center"}}>
                <img 
                  src="/src/images/Testimonials_Eimer-Mark.png"
                  alt={testimonials[currentTestimonialIndex].author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  style={{height: "130px", width: "130px"}}
                />
                "{testimonials[currentTestimonialIndex].content}"
              </div>
              <div className="mb-6 text-gray-700 italic" style={{justifyItems: "center"}}>
                <div style={{justifyItems: "center"}}>
                  <div className="font-semibold" style={{color: "#89964a"}}>{testimonials[currentTestimonialIndex].author}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonialIndex].role}</div>
                </div>
              </div>
            </div>
            <button id="prev-testimonial" style={{width: "130px"}} onClick={handleNextTestimonial}>
              <img src="/src/images/Testimonials_arrow-right.png" alt="Next" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50" id="articles">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 latestarticles">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 latestarticleDivs">
              <img 
                src="/src/images/Articles_Img1.png" 
                alt="Designing Talent Strategies That Align with AI-Driven Growth"
                className="w-full h-48 object-cover"
              />
              <div className="p-6" style={{background: "#ECF2FC"}}>
                <h3 className="text-xl font-bold mb-3">Designing Talent Strategies That Align with AI-Driven Growth</h3>
                <p className="text-gray-600 mb-4">You can have to have AI models in the world - but without cross-functional collaboration, they won't scale. AI success relies on talent.</p>
                <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore">
                  Learn More 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 latestarticleDivs">
              <img 
                src="/src/images/Articles_Img2.png" 
                alt="Upskilling for AI: What Your Workforce Actually Needs to Learn"
                className="w-full h-48 object-cover"
              />
              <div className="p-6" style={{background: "#ECF2FC"}}>
                <h3 className="text-xl font-bold mb-3">Upskilling for AI: What Your Workforce Actually Needs to Learn</h3>
                <p className="text-gray-600 mb-4">AI skills are everywhere, and that's the problem - In 2024 alone, over 78% of Fortune 1000 companies lack AI skills.</p>
                <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore" >
                  Learn More 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 latestarticleDivs">
              <img 
                src="/src/images/Articles_Img3.png" 
                alt="Cross-Functional Collaboration: The Missing Piece in AI Execution"
                className="w-full h-48 object-cover"
              />
              <div className="p-6" style={{background: "#ECF2FC"}}>
                <h3 className="text-xl font-bold mb-3">Cross-Functional Collaboration: The Missing Piece in AI Execution</h3>
                <p className="text-gray-600 mb-4">You can have the best AI models in the world - but without cross-functional collaboration, they won't scale. AI success relies on people.</p>
                <a href="#" className="inline-flex items-center text-decisive-blue hover:underline learnmore">
                  Learn More 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="btn-primary">
              VIEW ALL ARTICLES
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
      
      <Footer />
      
      <div id="toast-container" className="fixed top-4 right-4 z-50"></div>
    </div>
  );
};

export default Home;
