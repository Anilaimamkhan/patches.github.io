let tl = gsap.timeline();
// index contact
tl.from(".contact .form-container h5,.contact .form-container h2,.contact .form-container form",{
    y:150,
   opacity:0 ,
   duration:0.5,
   stagger:1,
   scrollTrigger:{
    trigger:".contact .form-container h5,.contact .form-container h2,.contact .form-container form",
    scroller:"body",
    // markers:true,
start:"-200px 50%",
end:"-200px 30%",
scrub:2
   }
})

// index client
tl.from(".counter .container .counter-box",{
    y:150,
   opacity:0 ,
   duration:0.5,
   stagger:1,
   scrollTrigger:{
    trigger:".counter .container .counter-box",
    scroller:"body",
    // markers:true,
start:"-200px 50%",
end:"-200px 30%",
scrub:2
   }
})

tl.from(".order .container .order-box ",{
    // y:150,
   opacity:0 ,
   duration:0.5,
   stagger:1,
   scrollTrigger:{
    trigger:".order .container .order-box",
    scroller:"body",
    // markers:true,
start:"-200px 50%",
end:"-200px 30%",
scrub:2
   }
})