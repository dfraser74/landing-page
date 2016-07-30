const mainBlock = document.querySelector('.text-logo');
var mouse = {x: 0, y: 0};
var wind = {
  w: window.innerWidth / 2,
  h: 100 + (mainBlock.offsetHeight / 2)
};

var sunTween = TweenMax.fromTo(mouse, 3, {x: mainBlock.offsetWidth / 2, y: -100}, {
  yoyo: true,
  repeat: -1,
  x: mainBlock.offsetWidth / 2,
  y: -500,
  ease: Power3.easeInOut
});

document.addEventListener('touchmove', onMouseMove);
document.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {

  sunTween.pause();
  mouse.x = e.clientX - mainBlock.offsetLeft + (mainBlock.offsetWidth / 2);
  mouse.y = e.clientY - mainBlock.offsetTop + (mainBlock.offsetHeight / 2);

  ontick();
}

function ontick() {
  wind.w = window.innerWidth / 2;
  let shadow = '';
  let i = 20;
  let len = i;

  while (i--) {
    shadow += ( Math.round(i * -((mouse.x - (wind.w)) / 100)) + 'px ' + Math.round(i * -((mouse.y - wind.h) / 100)) + 'px ' + (i * 4) + 'px hsla(255%,255%,255%,' + 1 / (len - 1) + '),' );
  }

  TweenMax.set(mainBlock, {textShadow: shadow});
}

/*function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}*/

ontick();
