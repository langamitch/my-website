gsap.registerPlugin(ScrollTrigger);

  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    y: -100,
    opacity: 0,
    ease: "power1.out"
  });

  window.addEventListener("DOMContentLoaded", () => {
    gsap.to(".word span", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out"
    });
  });

    document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const openFormBtn = document.getElementById('openFormBtn');
            
            // Form submission handler
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    budget: document.getElementById('budget').value,
                    projectType: document.getElementById('projectType').value,
                    message: document.getElementById('message').value
                };
                
                // Log form data (would be replaced with actual form submission)
                console.log('Form submission:', formData);
                
                // Show success message
                alert('Thank you for your submission! We will get back to you soon.');
                contactForm.reset();
            });
            
            // Scroll to form when button is clicked
            openFormBtn.addEventListener('click', function() {
                const formContainer = document.querySelector('.contact-form-container');
                formContainer.scrollIntoView({ behavior: 'smooth' });
            });
        });