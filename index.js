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

  
  const projectURL = "https://github.com/yourproject"; // Optional: set to "" if no link
  const minutes = 30; // How long the status should be shown
  const endTimeKey = "codingStatusEndTime";

  // Set a future time if not already set
  if (!localStorage.getItem(endTimeKey)) {
    const endTime = new Date().getTime() + 10 * 60 * 1000;
    localStorage.setItem(endTimeKey, endTime);
  }

  // Check if still within the time window
  const now = new Date().getTime();
  const endTime = parseInt(localStorage.getItem(endTimeKey));

  if (now < endTime) {
    // Show icon
    document.getElementById("coding-status").style.display = "block";
    if (projectURL) {
      document.getElementById("project-link").href = projectURL;
    } else {
      document.getElementById("project-link").removeAttribute("href");
    }

    // Start countdown
    let remaining = Math.floor((endTime - now) / 1000);
    const timerEl = document.getElementById("timer");

    const interval = setInterval(() => {
      const mins = Math.floor(remaining / 60).toString().padStart(2, '0');
      const secs = (remaining % 60).toString().padStart(2, '0');
      timerEl.textContent = ${mins}:${secs};
      remaining--;

      if (remaining < 0) {
        clearInterval(interval);
        document.getElementById("coding-status").style.display = "none";
        localStorage.removeItem(endTimeKey); // reset status
      }
    }, 1000);
  }
  
  
  
 
