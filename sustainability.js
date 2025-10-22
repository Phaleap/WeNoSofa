gsap.registerPlugin(ScrollTrigger);

gsap.to(".section3", {
    backgroundColor: "black",
    color: "white",
    duration: 1,
    scrollTrigger: {
        trigger:".section3",
        top: "top 70%",
        bottom: "bottom 30%",
        toggleActions: "play reverse play reverse",
    }
})