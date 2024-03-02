gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//ScrollSmoother
if(ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.main',
    smooth: 1.5,
    effects: true
  });
}

// counters
const numbers = document.querySelectorAll('.advantages__counter');
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: numbers,
    start: 'top center',
    toggleActions: 'restart pause resume pause'
  }
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: numbers,
    start: 'top center',
    toggleActions: 'restart pause resume pause'
  }
});

gsap.utils.toArray('.counterOne').forEach(function(el) {
  let target = { val: 0 };
  tl1.to(target, {
    val: el.getAttribute('data-number'),
    duration: 2,
    onUpdate: function(){
      el.innerText = target.val.toFixed(0);
    }
  });
});

gsap.utils.toArray('.counterTwo').forEach(function(el) {
  let target = { val: 0 };
  tl2.to(target, {
    val: el.getAttribute('data-number'),
    duration: 2,
    onUpdate: function(){
      el.innerText = target.val.toFixed(0);
    }
  });
});

tl1.play();
tl2.play();

//text in first screen
const text = new SplitType('.main-title__text', { types: 'chars'});
gsap.set('.main-title__text', { autoAlpha: 1 });
gsap.set(text.chars, { yPercent: 100 });

const initialAnimation = gsap.to(text.chars, {
  yPercent: 0,
  ease: "sine.out",
  stagger: {
    from: "center",
    amount: 0.5,
    ease: "power1.out"
  },
  onComplete: activateScrollTrigger
});

function activateScrollTrigger() {
  gsap.to(text.chars, {
    yPercent: -200,
    stagger: { from: 'center', amount: 1 },
    scrollTrigger: {
      trigger: '.main-title__text',
      start: 'top top',
      end: () => `+=${document.querySelector('.main-title__text').offsetHeight * 0.25}`,
      scrub: 1
    }
  });
}

//items appear from left
let itemsLeft = gsap.utils.toArray('.gsap-from-left');
itemsLeft.forEach(itemLeft => {
  gsap.fromTo(itemLeft, { x: -100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: itemLeft,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: true
    }
  })
});

//items appear from left
let itemsRight = gsap.utils.toArray('.gsap-from-right');
itemsRight.forEach(itemRight => {
  gsap.fromTo(itemRight, { x: 100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: itemRight,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: true
    }
  })
});

//items appear from top opacity
let itemsTop = gsap.utils.toArray('.gsap-from-top');
itemsTop.forEach(itemTop => {
  gsap.fromTo(itemTop, { y: 200, opacity: 0 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: itemTop,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: true
    }
  })
});

// reviews
gsap.utils.toArray('.reviews__item').forEach(function(el) {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: true
    },
  });

  tl3.from(el, {
    scale: 0,
    duration: 2,
    ease: 'power2.out',
    scrub: true
  });
});
