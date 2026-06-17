gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  /* ===================================
     HERO TIMELINE
  =================================== */

  const tl = gsap.timeline();

  tl.from("nav", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })

  .from(".hero-left", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.3")

  .from(".coin-main", {
    scale: 0.92,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=0.4")

  .from(".stats-card", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.8");



  /* ===================================
     MOUSE PARALLAX
  =================================== */

  const coin = document.querySelector(".coin-main");

  if (coin) {
    document.addEventListener("mousemove", (e) => {

      const x =
        (e.clientX - window.innerWidth / 2) * 0.015;

      const y =
        (e.clientY - window.innerHeight / 2) * 0.015;

      gsap.to(coin, {
        x,
        y,
        duration: 1.2,
        ease: "power2.out"
      });

    });
  }



  /* ===================================
     SECTION REVEALS
  =================================== */

  gsap.utils.toArray(".reveal-section")
    .forEach((section) => {

      gsap.from(section, {
        opacity: 0,
        y: 60,
        scale: 0.98,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

    });



  /* ===================================
     FEATURE CARDS
  =================================== */

  gsap.utils.toArray(".reveal-section .feature-card")
    .forEach((card) => {

      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      });

    });



  /* ===================================
     LEFT / RIGHT SECTIONS
  =================================== */

  if (document.querySelector(".slide-left")) {

    gsap.from(".slide-left", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".slide-left",
        start: "top 80%"
      }
    });

  }

  if (document.querySelector(".slide-right")) {

    gsap.from(".slide-right", {
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".slide-right",
        start: "top 80%"
      }
    });

  }



  /* ===================================
     LOGO MARQUEE
  =================================== */

  const track = document.querySelector(".logo-track");

  if (track) {

    gsap.to(track, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1
    });

  }

});

gsap.from(".tools-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".tools-text", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: .1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".tool-lock", {
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".tool-payment", {
  x: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".tool-data", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".tool-engine", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  delay: .15,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".crypto-tools",
    start: "top 80%"
  }
});

gsap.from(".how-section h2", {
  scrollTrigger: {
    trigger: ".how-section",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  duration: 1
});

gsap.from(".how-tabs", {
  scrollTrigger: {
    trigger: ".how-tabs",
    start: "top 85%"
  },
  y: 40,
  opacity: 0,
  duration: 1
});

gsap.from(".how-card", {
  scrollTrigger: {
    trigger: ".how-card",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  scale: 0.95,
  duration: 1.3,
  ease: "power3.out"
});

gsap.from(".how-card img", {
  scrollTrigger: {
    trigger: ".how-card",
    start: "top 80%"
  },
  y: 120,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".crypto-card", {
  scrollTrigger: {
    trigger: ".crypto-card",
    start: "top 80%"
  },
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".crypto-content", {
  scrollTrigger: {
    trigger: ".crypto-content",
    start: "top 80%"
  },
  x: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.to(".crypto-coins", {
  y: -15,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});

gsap.from(".cta-btn",{
  scrollTrigger:{
    trigger:".cta-btn",
    start:"top 85%"
  },
  y:40,
  opacity:0,
  duration:1
});

gsap.from(".cta-logo",{
  scrollTrigger:{
    trigger:".cta-logo",
    start:"top 85%"
  },
  x:120,
  opacity:0,
  scale:.8,
  duration:1.5,
  ease:"power3.out"
});

gsap.from(".cta-content",{
  scrollTrigger:{
    trigger:".cta-content",
    start:"top 85%"
  },
  x:-80,
  opacity:0,
  duration:1.2
});

gsap.from(".testimonial-left", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".testimonial-review", {
  scrollTrigger: {
    trigger: ".testimonial-review",
    start: "top 80%"
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".testimonial-section h2", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".news-section h2", {
  scrollTrigger: {
    trigger: ".news-section",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".news-section .grid > div", {
  scrollTrigger: {
    trigger: ".news-section",
    start: "top 75%"
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.25,
  ease: "power3.out"
});

gsap.from(".news-section button", {
  scrollTrigger: {
    trigger: ".news-section",
    start: "top 75%"
  },
  scale: 0.8,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8
});

gsap.from(".footer-left",{
  x:-80,
  opacity:0,
  duration:1.2,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".footer-wrap",
    start:"top 80%"
  }
});

gsap.from(".footer-links div",{
  x:80,
  opacity:0,
  stagger:.15,
  duration:1,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".footer-wrap",
    start:"top 80%"
  }
});

gsap.from(".newsletter-box",{
  y:80,
  opacity:0,
  duration:1.1,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".newsletter-box",
    start:"top 90%"
  }
});
