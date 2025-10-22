gsap.registerPlugin(ScrollTrigger);

gsap.to(".section2", {
  backgroundColor: "black",
  color: "white",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section2",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  }
});
gsap.to("nav", {
  border: "1px solid white",
  color: "white",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section2", 
   start: "top 80%",      
    end: "bottom 20%",  
    toggleActions: "play reverse play reverse",
  }
});
gsap.to("nav a", { 
  color: "white",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 80%",      
    end: "bottom 20%",  
    toggleActions: "play reverse play reverse",
  }
});
gsap.to(".container3 h1", {
  color: "black",
  duration: 0.3,
  scrollTrigger:{
    trigger:".section3",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play reverse play reverse",
  }
})
gsap.from(".desImg", {
  x: -100,
  opacity: 0,
  scale: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".desAndImg",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.to(".section5", {
  color: "black",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section5",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
    scrub: true,
  }
})

gsap.to("nav", {
 backgroundColor: "transparent",
  color: "#f5c542",
  border: "1px solid #f5c542",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section5",
    start: "top 80%",      
    end: "bottom 20%",    
    toggleActions: "play reverse play reverse",
    markers: false,        
  }
});

gsap.to("nav a", { 
  color: "#f5c542",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section5",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  }
});
gsap.from(".introduction", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".img", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".section5 .description", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".section5 .description",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".product1", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product1",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".product2", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product1",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".product3", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product1",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
});
gsap.to(".section7", {
  backgroundColor: "black",
  color: "white",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section7",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
  }
});


gsap.from(".rightSide7 img", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".rightSide7 img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})

gsap.from(".leftSide7 img", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".leftSide7 img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.from(".container6 .rightPart img", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".container6 .rightPart img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
})
gsap.to("nav", {
 backgroundColor: "transparent",
  color: "white",
  border: "1px solid white",
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer",
    start: "top center",      
    end: "bottom 20%",    
    toggleActions: "play reverse play reverse",
     
  }
});

gsap.to("nav a", { 
  color: "white",
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  }
});