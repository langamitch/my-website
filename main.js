 // Initialize GSAP ScrollTrigger
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    initSectionAnimations();
    initArrowButtonAnimations();
    initClock();
    initLocation();
    initMonthDisplay();
  });
  
  // Section animations
  function initSectionAnimations() {
    const sections = document.querySelectorAll('.kitchen-section');
    
    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      });
      
      tl.fromTo(section.querySelector('.subtitle'), 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(section.querySelector('.title'), 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 
        "-=0.6"
      )
      .fromTo(section.querySelector('.arrow-button'), 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 
        "-=0.4"
      );
      
      // Parallax effect
      gsap.to(section.querySelector('.kitchen-image'), {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }
  
  // Arrow button hover animations
  function initArrowButtonAnimations() {
    const arrowButtons = document.querySelectorAll('.arrow-button');
    
    arrowButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power1.out" });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  }
  
  // Clock functionality
  function initClock() {
    function updateClock() {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'short' });
      const time = now.toLocaleTimeString();
      document.getElementById("datetime").textContent = `${day} ${time}`;
    }
  
    setInterval(updateClock, 1000);
    updateClock();
  }
  
  // Location functionality
  function initLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const place = data.address.city || data.address.town || data.address.village || data.address.state || "your area";
          document.getElementById("location").textContent = place;
        },
        () => {
          document.getElementById("location").textContent = "Location unavailable";
        }
      );
    } else {
      document.getElementById("location").textContent = "Geolocation not supported";
    }
  }
  
  // Month display
  function initMonthDisplay() {
    const monthElement = document.getElementById("dynamic-month");
    const now = new Date();
    const shortMonth = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    monthElement.textContent = `${shortMonth} ${year}`;
  }