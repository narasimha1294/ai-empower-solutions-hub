import React from "react";

const FooterNavBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements["newsletter-email"].value;
    console.log("Subscribed with:", email);
    // Add API call or other logic here
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <section className="py-4 bg-circuit-bg text-white relative" id="newsletter">
        <div
          className="absolute inset-0 bg-image opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('./src/images/Subscribe_BG.png')"}}
        ></div>

        <div className="container mx-auto px-6 py-4 relative z-10">
          <div id="subscribeContent">
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
                  id="newsletter-email"
                  required
                  aria-label="Newsletter email input"
                />
                <button type="submit" className="btn-primary" id="btnsubscribe" aria-label="Subscribe to newsletter">
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center" id="footersection">
        <div className="text-center mb-4 sm:mb-0">
          <p className="text-sm">© 2025 Thakur International - All Rights Reserved.</p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
          {/* Social Icons */}
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavBar;
