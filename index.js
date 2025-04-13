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

  