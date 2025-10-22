gsap.registerPlugin(ScrollTrigger);

gsap.from(".section2 img", {
    scale: 0.9,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".section2 img",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub: true
    }
})
gsap.from(".boxContainer .box1", {
    x: "-100px",
    opacity: 0,
    scrollTrigger: {
        trigger:  ".boxContainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
})
gsap.from(".boxContainer .box2", {
    y: "100px",
    opacity: 0,
    scrollTrigger: {
        trigger:  ".boxContainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
})
gsap.from(".boxContainer .box3", {
    x: "100px",
    opacity: 0,
    scrollTrigger: {
        trigger:  ".boxContainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
})

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener("click", () => {
    alert("Thank you for texting");
});
