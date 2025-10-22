gsap.registerPlugin(ScrollTrigger);
gsap.to(".section3 .img", {
    scale: 1.08,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        scrub: true
    }
})
gsap.to(".section4 ", {
    backgroundColor: "black",
    color: "white",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    }
})
gsap.to(".section4 h1", {
    color: "white",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    }
})