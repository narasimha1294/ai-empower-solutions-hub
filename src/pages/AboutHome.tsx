import React, { useEffect, useState } from 'react';
// import './App.css'; // Make sure to include Tailwind CSS or your own styling
import Banner from '.././images/Banner.png';
import MyExperienceImg from '.././images/MyExperience_Img.png';
import Icon01 from '.././images/Icon_01.png';
import Icon02 from '.././images/Icon_02.png';
import Icon03 from '.././images/Icon_03.png';
import ArticlesImg1 from '.././images/Articles_Img1.png';
import ArticlesImg2 from '.././images/Articles_Img2.png';
import ArticlesImg3 from '.././images/Articles_Img3.png';
import LeftArrow from '.././images/Testimonials_arrow-left.png';
import RightArrow from '.././images/Testimonials_arrow-right.png';
import TestimonialImg from '.././images/Testimonials_Eimer_Mark.png';
import aicoursesBG from '.././images/aicoursesBG.png';

// Logos
import HP from '.././images/HP.png';
import Microsoft from '.././images/Microsoft.png';
import NVIDIA from '.././images/NVIDIA.png';
import GoDaddy from '.././images/GoDaddy_logo.png';
import Empower from '.././images/Empower_Logo.png';
import Corent from '.././images/Corent-logo.png';
import YMCA from '.././images/ymca-logo.png';

function HomeContent() {
  const testimonials = [
    {
      id: 1,
      content: "Mahesh's coaching approach cements his position as a thoughtful leader...",
      author: "Mark Ebner",
      role: "Leadership Mentor Havas",
    },
    {
      id: 2,
      content: "Working with Mahesh has been transformative for our organization's AI strategy...",
      author: "Sarah Johnson",
      role: "CTO, TechInnovate",
    },
    {
      id: 3,
      content: "I've attended many AI workshops, but Mahesh's programs stand out...",
      author: "David Reynolds",
      role: "VP of Digital Transformation, Global Solutions",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-circuit-bg text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is your organization truly AI-Ready?
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Turn your AI strategy into real business results.
            </p>
            <button className="btn-primary" id="connect-button">CONNECT MAHESH</button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">My Experience</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-decisive-blue mb-4">
                Mahesh M. Thakur is a top Artificial Intelligence leader, advisor, and investor
              </h3>
              <p className="mb-4">
                  Mahesh is an AI industry leader with a 20+ years of executive experience at top tech firms including Microsoft, 
                  Amazon, Intuit, and GoDaddy. He has led large-scale AI product development, driven significant revenue growth, 
                  and invested in successful startups. As a member of MG 100, he now coaches C-suite leaders on leadership and AI adoption, 
                  combining deep technical expertise with strategic business insight.
              </p>
              <p className="mb-4">
              His achievements include building and scaling an Artificial Intelligence product at Microsoft,
               reaching $600 million in annual revenue at GoDaddy, boosting
              Microsoft 365 subscription revenue by 25% through a key partnership with Microsoft.
              </p>
            </div>
            <div className="md:w-1/3">
              <img src={MyExperienceImg} alt="Mahesh M. Thakur" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Courses Section */}
      <section className="py-16 bg-white" id="courses" style={{ backgroundImage: `url(${aicoursesBG})` }}>
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Learn AI with Mahesh M. Thakur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Icon01, title: '10x Your Productivity with AI', text: 'Unlock the true potential of generative AI...' },
              { icon: Icon02, title: 'Harnessing Generative AI', text: 'Revolutionize how your team works with generative AI...' },
              { icon: Icon03, title: 'Thrive in the AI Era', text: 'Stay ahead in the AI-driven world...' }
            ].map((course, i) => (
              <div key={i} className="card p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <img src={course.icon} alt="" className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="mb-4 text-gray-600">{course.text}</p>
                <a href="#" className="inline-flex items-center text-decisive-blue hover:underline">
                  Learn More
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Logos */}
      <section className="w-full py-4 bg-[#F2F2F2]">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-4">Previous audiences</h2>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {[HP, Microsoft, NVIDIA, GoDaddy, Empower, Corent, YMCA].map((logo, i) => (
              <img key={i} src={logo} alt={`logo-${i}`} className="h-12 md:h-16 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Mission */}
      <section className="container py-8">
        <h3 className="section-heading text-center">
          "My mission is to energize, educate, and empower your organization to harness the power of AI and leadership."
        </h3>
      </section>

      {/* Speaking Cards */}
      <section className="bg-[#063970] text-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-4">Speaking</h2>
          <p className="text-lg font-light">
            Mahesh M. Thakur has delivered talks on artificial intelligence, leadership and decision making...
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Testimonials</h2>
          <div className="flex items-center justify-center">
            <button onClick={prevTestimonial}><img src={LeftArrow} alt="Previous" /></button>
            <div className="p-8 max-w-xl text-center">
              <img src={TestimonialImg} alt={currentTestimonial.author} className="mx-auto h-24 w-24 rounded-full mb-4" />
              <p className="italic text-gray-700">"{currentTestimonial.content}"</p>
              <div className="mt-4 font-semibold text-[#89964a]">{currentTestimonial.author}</div>
              <div className="text-sm text-gray-600">{currentTestimonial.role}</div>
            </div>
            <button onClick={nextTestimonial}><img src={RightArrow} alt="Next" /></button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50" id="articles">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              image: ArticlesImg1,
              title: "Designing Talent Strategies That Align with AI-Driven Growth",
              desc: "You can have the best AI models in the world..."
            }, {
              image: ArticlesImg2,
              title: "Upskilling for AI: What Your Workforce Actually Needs to Learn",
              desc: "AI skills are everywhere—and that's the problem..."
            }, {
              image: ArticlesImg3,
              title: "Cross-Functional Collaboration: The Missing Piece in AI Execution",
              desc: "You can have the best AI models in the world..."
            }].map((article, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6 bg-[#ECF2FC]">
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.desc}</p>
                  <a href="#" className="inline-flex items-center text-decisive-blue hover:underline">
                    Learn More
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-primary">VIEW ALL ARTICLES</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;
