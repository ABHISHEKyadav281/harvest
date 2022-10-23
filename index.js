
gsap.from(".nav h4", {
    delay: 1,
    opacity: 0,
    y: -50,
    stagger: {
        amount: 1
    }
})


gsap.from(".small span", {
    delay: 1,
    y: 100,
    opacity: 0,
    stagger: .4,
    ease: Expo.easeInOut

})
gsap.from(".topic span", {

    y: 100,
    opacity: 0,
    stagger: .8,
    color: "red",
    ease: Bounce.easeOut,
    duration: 1

})

gsap.from(".box h4 ,.section1 small", {

    y: 100,
    opacity: 0,
    stagger: .9,
    ease: Expo.easeInOut

})
// =========2============


gsap.from(".section2 h3", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section2 h3",
        scroll: "body",
        start: "top 90%",
        end: "top 85%",
        scrub: "2",
    },
    y: 50

})

gsap.from(".section2 p ,.section2 small", {

    opacity: 0,
    scrollTrigger: {
        trigger: ".section2 p ,.section2 small ",
        scroll: "body",
        start: "top 85% ",
        end: "top 60%",
        scrub: 2,
    },
    y: 50,
    duration: 1.5,
    delay: .5

})

gsap.from(".imgs2d img", {

    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".imgs2d img ",
        scroll: "body",
        start: "top 90% ",
        end: "top 45%",
        scrub: 2,
    },
    x: -100
})



// =========3============


gsap.from(".section3 img", {
    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".section3 img",
        scroller: "body",
        start: "top 95%",
        end: "top 55%",
        scrub: 2,

    },
    y: 50


})
gsap.from(".section3 .naam p", {
    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".section3 .naam p",
        scroller: "body",
        start: "top 95%",
        end: "top 55%",
        scrub: 2,

    },
    y: 50

})


gsap.from(".section3 .bbox h3", {
    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".section3 .bbox h3",
        scroller: "body",
        start: "top 97%",
        end: "top 95%",
        scrub: 2,

    },
    y: 50

})
gsap.from(".section3 .bbox p", {
    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".section3 .bbox p",
        scroller: "body",
        start: "top 95%",
        end: "top 65%",
        scrub: 2,

    },
    y: 50

})

gsap.from(".section3 .bd h1", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section3 .bd h1",
        scroller: "body",
        start: "top 93%",
        end: "top 85%",
        scrub: 2,


    },
    y: -50

})
gsap.from(".section3 .bd p", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section3 .bd p",
        scroller: "body",
        start: "top 93%",
        end: "top 85%",
        scrub: 2,


    },
    y: -50

})



gsap.from(".section3 .sbd ", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".section3 .sbd ",
        scroller: "body",
        start: "top 100%",
        end: "top 97%",
        scrub: 2,

    },
    x: 50

})



