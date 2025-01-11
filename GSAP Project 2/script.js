// console.log("Hello") Just for checking script linking
var tl = gsap.timeline();
gsap.registerPlugin(TextPlugin)
var section = document.querySelector("body");
var list = document.querySelector("ul")

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

section.addEventListener("mousemove", function (e) {
    gsap.to(".cursor", {

        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    })
})

list.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        scale: 2,
        duration: 0.5,
        backgroundColor: "rgba(255, 230, 0, 0.3)",
    })
})

list.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        scale: 1,
        duration: 0.3,
        backgroundColor: "",
    })

})

tl.from(".logo", {
    opacity: 0,
    y: -50,
    rotate: 360,
    scale: 0.8,
    duration: 1,
    delay: 0.5
})
    .from(".title", {
        opacity: 0,
        x: -20,
        duration: 0.8,
    })
gsap.from("li", {
    opacity: 0,
    y: -15,
    duration: 0.8,
    ease: "slow(0.7,0.7,false)",
    stagger: 0.15,
})
gsap.from(".navbtn", {
    visibility: "hidden",
    rotate: 360,
    duration: 2,
    scrub: true
})
gsap.to(".h2", {
    opacity: 1,
    duration: 5,
    ease: "none",
    text: "Shares briefcase selected by our financial analysts"
})
tl.to(".pg", {
    opacity: 1,
    duration: 5,
    ease: "none",
    text: "Determine your level of risk and desired level of income per year, and we will create a briefcase individually for you."
})
    .from(".btndiv", {
        opacity: 0,
        y: -20,
        duration: 0.8,
    })
gsap.from(".mainimg", {
    opacity: 0,
    duration: 1, // Faster entry for the team section
    x: "-50%",
    ease: "power3.out"
})
tl.from(".cards", {
    opacity: 0,
    duration: 1.6,
    delay: 1,
    y: -50,
    stagger: 0.45,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 60%",
        end: "top 20%",
        scrub: 2,
        toggleActions: "play none none reverse",
    }
});
