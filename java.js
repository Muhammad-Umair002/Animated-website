var curs = document.querySelector("#cursor");
var blurc = document.querySelector("#blur_cursor");
document.addEventListener("mousemove", function (dets) {
  curs.style.left = dets.x + "px";
  curs.style.top = dets.y + "px";
  blurc.style.left = dets.x - 100 + "px";
  blurc.style.top = dets.y - 100 + "px";
});
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    curs.style.scale=2
    curs.style.border="1px solid white"
    curs.style.backgroundColor="transparent"
  })
   elem.addEventListener("mouseleave",function(){
    curs.style.scale=1
    curs.style.border="0px solid #95c11e "
    curs.style.backgroundColor="#95c11e"
  })
})
gsap.to("#nav", {
  backgroundColor: "black",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-in",{
  y:60,
  opacity:0,
  duration:1.5,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 68%",
    scrub:2
  }
})
gsap.from(".card",{
  scale:0.8,
   duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 60%",
    end:"top 68%",
    scrub:2
  }
})
gsap.from("#colon1",{
x:-70,
y:-70,
scrollTrigger:{
  trigger:"#colon1",
  scroller:"body",
  start:"top 50%",
  end:"top 45%",
  scrub:3
}
})
gsap.from("#colon2",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:3
  }
})
gsap.from("#page4 h1",{
  y:50,
    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 70%",
      scrub:2
    }
})