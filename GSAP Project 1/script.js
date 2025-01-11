var tl = gsap.timeline();
var section = document.querySelector("body");
var list = document.querySelector("ul");

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
        duration: 0.3, // Slightly faster cursor follow
        ease: "power2.out" // Smooth easing for natural movement
    });
});

list.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        scale: 2,
        backgroundColor: "rgba(255, 230, 0, 0.3)",
        duration: 0.4 // Quick scale-up for responsiveness
    });
});

list.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        scale: 1,
        backgroundColor: "",
        duration: 0.4 // Quick return to normal size
    });
});

tl.from(".logo", {
    opacity: 0,
    y: -50,
    rotation: 360,
    scale: 0.8,
    duration: 1, // Moderate timing for the logo
    ease: "power3.out"
})
    .from("h2", {
        opacity: 0,
        y: -20,
        scale: 1.1,
        duration: 0.8, // Reduced duration for quicker transition
        delay: 0.3
    })
    gsap.from("li", {
        opacity: 0,
        y: -15, // Less vertical movement for smoother stagger
        duration: 1.5,
        stagger: 0.15, // Quicker stagger for list items
        ease: "bounce.out"
    })
tl.from(".navbtn", {
        opacity: 0,
        duration: 0.7, // Short duration for nav buttons
        stagger: 0.3 // Smooth staggered appearance
    })
    .from(".team", {
        opacity: 0,
        duration: 1, // Faster entry for the team section
        x: "-100%",
        ease: "power3.out"
    })
    .from("h1", {
        opacity: 0,
        y: -30, // Less dramatic movement
        duration: 1,
        ease: "power2.out"
    })
    .from("h1 span", {
        opacity: 0,
        y: 30, // Balanced movement
        duration: 0.8,
        ease: "power2.out"
    })
    .from("p", {
        opacity: 0,
        y: 10, // Subtle movement for text
        duration: 0.8,
        skewY: 5 // Reduced skew for a cleaner look
    })
    .from(".blackbtn", {
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)" // Slightly reduced back-out effect
    })
    .from(".yellowbtn", {
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)"
    });

tl.from(".footer .content", {
    opacity: 0,
    y: -15,
    duration: 1.5,
    stagger: 0.15, // Quicker stagger for list items
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 60%",
        end: "top 40%",
        scrub: 2,
        toggleActions: "play none none reverse",
    }
});
