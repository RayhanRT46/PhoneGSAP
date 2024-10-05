var tl = gsap.timeline()


// Herobanner Photo Animation GSAP Start
tl.from("#livePhoneScrollTrigger .livePhone img", {
  scale: 2,
  y: () => -window.innerHeight * 0.6,
      scrollTrigger:{
      trigger: ".livePhone",
      scroller: "body",
      start: "top 100%",
      end: "top 10%",
      scrub: 3,
      // markers: true
      }
});

// background text GSAP code start 
const hiddenElements = document.querySelectorAll('.uperText2 p');
// Show and animate the elements
hiddenElements.forEach(element => {
    tl.from(element, { 
      opacity: 1,
      y: "100vh", // Large offset, adjust if needed
      ease: "power4.Out", // Animation easing
      scrollTrigger: {
        trigger: "#livePhoneScrollTrigger", // Ensure this ID or class exists
        start: "top 80%", // Adjust scroll start based on viewport
        end: "top -50%", // End value can be reduced to make animation smoother
        scrub: true,
        // markers: true,
      }
    });
});


const hiddenElements2 = document.querySelectorAll('.uperText3 p');
// Show and animate the elements
hiddenElements2.forEach(element => {
    tl.from(element, { 
      opacity: 1,
      y: "200vh", // Large offset, adjust if needed
      ease: "power4.Out", // Animation easing
      scrollTrigger: {
        trigger: "#photos", // Ensure this ID or class exists
        start: "top 0%", // Adjust scroll start based on viewport
        end: "top -100%", // End value can be reduced to make animation smoother
        scrub: true,
        // markers: true,
      }
    });
});






// Image slider with popup animation start GSAP
// Select all the images inside the photos container
const images = gsap.utils.toArray("#photos .photo .imgEf");

ScrollTrigger.matchMedia({
  // Mobile screens
  "(max-width: 768px)": function() {
    gsap.to("#photos .photo", {
      xPercent: -110,  // Less horizontal scroll for small screens
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".photo",
        pin: true,
        start: "center 60%", 
        end: () => "=" + document.querySelector(".photo").offsetWidth,
        scrub: 1,
        snap: 1 / (images.length - 1),
        invalidateOnRefresh: true,
      }
    });
  },

  // Larger screens
  "(min-width: 769px)": function() {
    gsap.to("#photos .photo", {
      xPercent: -100, // Full horizontal scroll for large screens
      ease: "none",
      scrollTrigger: {
        trigger: ".photo",
        pin: true,
        start: "center 70%", 
        end: () => "=" + document.querySelector(".photo").offsetWidth,
        scrub: 1,
        snap: 0 / (images.length - 0),
        invalidateOnRefresh: true,
      }
    });
  }
});

// Loop through each image and apply zoom effect based on their horizontal position
images.forEach((imgEf, i) => {
  gsap.to(imgEf, {
    ease: "none",
      scrollTrigger: {
      trigger: images, // Each image is its own trigger
      start: () => `${i * 50}% center`, // Start when this image is approaching the center
      end: () => `${(i + 1) * 50}% center`, // End when this image leaves the center
      scrub: 2, // Smooth zoom transition
      // markers: true,
      onEnter: () => {
        gsap.to(imgEf, { scale: 1.3, gap: 18 }); // Zoom in when the image hits the center
      },
      onLeave: () => {
        gsap.to(imgEf, { scale: 0.9, gap: 18 }); // Reset when the image leaves the center
      },
      onEnterBack: () => {
        gsap.to(imgEf, { scale: 1.3, gap: 20 }); // Zoom in when scrolling back to the center
      },
      onLeaveBack: () => {
        gsap.to(imgEf, { scale: 0.9, gap: 20 }); // Reset when leaving center scrolling back
      }
    }
  });
});


// Horizontal Image GSAP (.imgEF1)
tl.to(".photo .slideImg", {
  x: "35vw",  // Added horizontal movement (adjust value as needed)
  ease: "power2.inOut",
  scrollTrigger:{
    trigger: ".slideImg",
    scroller: "body",
    start: "top -130%",
    end: "top -250%",
    scrub: 3,
    // markers: true
  }
});

// Horizontal Image GSAP (.imgEF1)
gsap.to(".section3", {
  opacity: 1,
  x: "20vw",  // Added horizontal movement (adjust value as needed)
  y: "-55vh",
  ease: "power2.inOut",
  scrollTrigger:{
    trigger: ".section3",
    scroller: "body",
    start: "top -150%",
    end: "top -200%",
    scrub: 3,
    markers: true
  }
});