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
function listanimation() {
    list.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            scale: 2,
            duration: 0.5,
            backgroundColor: "#28282867",
        })
    })

    list.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            scale: 1,
            duration: 0.3,
            backgroundColor: "",
        })

    })
}

listanimation();

function wheelanimation() {
    window.addEventListener("wheel", function (e) {
        gsap.to(".marque", {
            transform: e.deltaY > 0 ? "translateX(-200%)" : "translateX(100%)", // Ternary operator for condition
            duration: 5,
            repeat: -1, // Infinite repeat
            ease: "none",
        })
    })
}

wheelanimation();

function isMobile() {
    return window.innerWidth <= 768;
}

if (isMobile()) {
    // Set fallback content for small devices
    document.querySelector(".h2").textContent = "The Unsocial Network";
    document.querySelector(".pg").textContent =
        "Smartphones and especially social media apps are so addictive, learn to take control of your behavior.";
    alert("This website is optimized for desktop or laptop use. Some features may not work correctly on mobile devices.")
}

if (window.innerWidth > 768) {

    tl.from(".title", {
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
    tl.to(".h2", {
        opacity: 1,
        duration: 3,
        ease: "none",
        text: "The Unsocial Network"
    })
    tl.to(".pg", {
        opacity: 1,
        duration: 2,
        ease: "none",
        text: "Smartphones and especially social media apps are so addictive, learn to take control of your behavior."
    })
    tl.from(".btn", {
        visibility: "hidden",
        duration: 1.2,
        rotate: 360,
        y: -15
    })
    tl.from(".mainimg", {
        opacity: 0,
        duration: 1, // Faster entry for the team section
        x: "-50%",
        ease: "power3.out"
    })
    tl.from(".page3 .h2ofpage2", {
        opacity: 1,
        duration: 4,
        ease: "none",
        text: "Lorem ipsum dolor sit",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 80%",
            end: "bottom 30%",
            endTrigger: ".footer",
            scrub: 6,

        }
    })
        .from(".page3 .pgofpage2", {
            opacity: 1,
            duration: 2,
            ease: "steps(12)",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente mollitia dolore at repudiandae laborum dicta",
            scrollTrigger: {
                trigger: ".page2",
                start: "top 60%",
                end: "bottom 40%",
                scrub: 5,
                // markers: true,
                endTrigger: ".footer",
                toggleActions: "none"
            }
        })
        .from(".page3 .secondimg", {
            opacity: 0,
            x: "-180%",
            ease: "sine.out",
            scrollTrigger: {
                trigger: ".page2",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 5,
                toggleActions: "none"
            }
        })

        // Footer Animation
        .from("footer .text-center", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "footer",
                start: "top 90%",
                end: "top 80%",
                scrub: true,
            }
        })
        .from("footer .flex a", {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "footer",
                start: "top 90%",
                end: "top 80%",
                scrub: 2,
            }
        })
}
