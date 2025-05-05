
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const ExecutiveCoaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div id="coaching">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span>EXECUTIVE COACHING</span>
            </div>
            
            <h1 className="hero-title">
              Unlock High Performance & Accelerate Your Career Growth
            </h1>
            
            <p className="hero-subtitle">
              For Directors, VPs, and C-Suite Leaders at Meta, Google, Uber, Autodesk, and more.
            </p>
          </div>
        </section>
    
        {/* Why Section */}
        <section className="why-section">
          <div className="container" id="whysection">
            <div className="why-content">
              <div className="why-graphic" style={{marginRight: "2%"}}>
                <div className="">
                  <img src="/src/images/Img_06.png" alt="Why High Performance Matters" />
                </div>
              </div>
              
              <div className="why-text">
                <h2 className="section-title">Why High Performance Matters</h2>
                
                <div className="section-highlight">
                  <p>
                    Join an elite program designed to elevate your leadership presence, 
                    enhance your influence, and position you for top-level success. This isn't 
                    just about performance; it's about standing out, earning visibility, and 
                    securing larger scopes.
                  </p>
                </div>
                
                <ul className="feature-list">
                  <li>Become the executive considered for major promotions & leadership expansions.</li>
                  <li>Gain visibility from senior leadership & board-level executives.</li>
                  <li>Command higher compensation & leadership opportunities.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    
        {/* Program Section */}
        <section className="program-section">
          <div className="container">
            <div className="section-header" id="whatheader">
              <h4 className="section-title">What's Inside the Program</h4>
              <p className="section-subtitle" style={{fontStyle: "italic", fontSize: "16px", fontWeight: 700}}>
                A Proven System for High-Performing Executives
              </p>
            </div>
            
            <div className="program-cards">
              {/* Mastermind Sessions */}
              <div className="program-card">
                <div className="card-icon-container">
                  <div className="card-icon card-icon-yellow">
                    <img src="/src/images/Icon_04.png" alt="Mastermind Sessions" />
                  </div>
                </div>
                <h3 className="card-title">Monthly Mastermind Sessions</h3>
                <p className="card-text">
                  Engage with high-caliber peers in a structured learning environment.
                </p>
              </div>
              
              {/* One-on-One Coaching */}
              <div className="program-card">
                <div className="card-icon-container">
                  <div className="card-icon card-icon-blue">
                    <img src="/src/images/Icon_05.png" alt="One-on-One Coaching" />
                  </div>
                </div>
                <h3 className="card-title">One-on-One Coaching with Mahesh M. Thakur</h3>
                <p className="card-text">
                  Personalized sessions tailored to your career challenges & growth.
                </p>
              </div>
              
              {/* Leadership Retreat */}
              <div className="program-card">
                <div className="card-icon-container">
                  <div className="card-icon card-icon-red">
                    <img src="/src/images/Icon_06.png" alt="Leadership Retreat" />
                  </div>
                </div>
                <h3 className="card-title">Annual Leadership Retreat</h3>
                <p className="card-text">
                  An exclusive in-person experience to deepen connections & strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
    
        {/* Who is this for Section */}
        <section className="who-section">
          <div className="container">
            <div className="who-content">
              <div className="who-text">
                <h2 className="section-title">Who Is This For?</h2>
                <p className="section-subtitle">Is This Program Right for You?</p>
                
                <ul className="feature-list">
                  <li>You're a Manager, Director, VP, or C-Suite leader aiming to reach the next level.</li>
                  <li>You want to gain visibility and influence at the top.</li>
                  <li>You want a structured, high-impact coaching experience.</li>
                </ul>
              </div>
              
              <div className="who-image">
                <img src="/src/images/Img.png" alt="AI Assistant" />
              </div>
            </div>
          </div>
        </section>
    
        {/* Apply Section */}
        <section className="apply-section">
          <div className="container" id="applicationsection">
            <h2 className="section-title">Apply for the Executive Coaching Program</h2>
            <p className="section-text">Spots Are Limited - Secure Your Team's Place in the #1 AI in Business Program!</p>
            
            <Button variant="primary" size="lg" className="btn-large">
              APPLY NOW
            </Button>
          </div>
        </section>
    
        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header" id="testimonialheader">
              <h2 className="section-title">Success Stories</h2>
              <p className="section-subtitle">Trusted by Executives at the World's Leading Companies</p>
            </div>
            
            <div className="testimonials-container">
              <button className="testimonial-nav-btn testimonial-prev" aria-label="Previous testimonial">
                <img src="/src/images/Testimonials_arrow-left.png" alt="Previous" />
              </button>
              
              <div className="testimonials-slider">
                {/* Testimonial 1 */}
                <div className="testimonial-card active">
                  <div className="testimonial-header">
                    <div className="customerabout">
                      <div className="customerImage">
                        <img src="/src/images/Img_03.png" alt="Nivedita Ojha" className="testimonial-image" />
                      </div>
                      <div className="customerdesc">
                        <h3 className="testimonial-name">Nivedita Ojha</h3>
                        <p className="testimonial-position">VP Product Management</p>
                        <p className="testimonial-company">Autodesk</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="testimonial-quote">Mahesh helped me establish myself as a visionary leader in my organization. As a leader of people and an owner of a portfolio of products...</p>
                  <div style={{display: "flex", justifyContent: "end"}}>
                    <button className="testimonial-read-more">Read More</button>
                    <img src="/src/images/gg_arrow-up-o.png" style={{marginLeft: "2%"}} alt="Read more" />
                  </div>
                </div>
                
                {/* Additional testimonials would be implemented with a slider component */}
              </div>
              
              <button className="testimonial-nav-btn testimonial-next" aria-label="Next testimonial">
                <img src="/src/images/Testimonials_arrow-right.png" alt="Next" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ExecutiveCoaching;
