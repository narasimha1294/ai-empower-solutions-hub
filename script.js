document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const xIcon = document.querySelector('.x-icon');
    
    if (mobileMenuButton && mobileMenu && menuIcon && xIcon) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        xIcon.classList.toggle('hidden');
      });
    }
  
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            xIcon.classList.add('hidden');
          }
          
          // Scroll to target section
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Connect button click handler
    const connectButton = document.getElementById('connect-button');
    if (connectButton) {
      connectButton.addEventListener('click', () => {
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
          experienceSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  
    // Testimonials carousel
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
    
    let currentIndex = 0;
    const testimonialContent = document.querySelector('.testimonial-content');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    function displayTestimonial(index) {
      if (!testimonialContent) return;
      
      const testimonial = testimonials[index];
      testimonialContent.innerHTML = `
        <div class="mb-6 text-gray-700 italic" style="justify-items: center;">
        <img 
            src="./src/images/Testimonials_Eimer-Mark.png"
            alt="${testimonial.author}"
            class="w-12 h-12 rounded-full object-cover mr-4"
            style= "height:130px; width:130px;"
          />
          "${testimonial.content}"
        </div>
        <div class="mb-6 text-gray-700 italic" style="justify-items: center;">
          
          <div style="justify-items: center;">
            <div class="font-semibold" style="color:#89964a">${testimonial.author}</div>
            <div class="text-gray-600 text-sm">${testimonial.role}</div>
          </div>
        </div>
      `;
      
      // Add a subtle fade-in effect when changing testimonials
      testimonialContent.classList.add('fade-in');
      setTimeout(() => {
        testimonialContent.classList.remove('fade-in');
      }, 300);
    }
    
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        displayTestimonial(currentIndex);
      });
      
      nextButton.addEventListener('click', () => {
        currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        displayTestimonial(currentIndex);
      });
      
      // Display initial testimonial
      displayTestimonial(currentIndex);
    }
  
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput ? emailInput.value.trim() : '';
        
        if (email) {
          showToast('Thank you for subscribing!', 'success');
          if (emailInput) emailInput.value = '';
        } else {
          showToast('Please enter your email address', 'error');
        }
      });
    }
  
    // Toast notification system
    function showToast(message, type = 'success') {
      const toastContainer = document.getElementById('toast-container');
      if (!toastContainer) return;
      
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      
      toastContainer.appendChild(toast);
      
      // Auto-remove after 3 seconds
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        
        // Remove from DOM after animation
        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 300);
      }, 3000);
    }
  });
  