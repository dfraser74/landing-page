function Sun() {
  const mainBlock = this.mainBlock = document.querySelector('.text-logo');
  var mouse = this.mouse = {x: 0, y: 0};
  var mainBlockClientRect = mainBlock.getBoundingClientRect();
  this.wind = {
    w: (mainBlockClientRect.left + mainBlockClientRect.width / 2),
    h: 0
  };

  this.sunTween = TweenMax.fromTo(mouse, 3, {x: mainBlock.offsetWidth / 2, y: 0}, {
    yoyo: true,
    repeat: -1,
    x: 0,
    y: 0,
    ease: Power3.easeInOut
  });

  this.onMouseMove = debounce(this._mouseMove.bind(this), 5);

}
Sun.prototype = {

  activate() {
    document.addEventListener('touchmove', this.onMouseMove);
    document.addEventListener('mousemove', this.onMouseMove);
    this.onTick();
  },

  deactivate() {
    document.removeEventListener('touchmove', this.onMouseMove);
    document.removeEventListener('mousemove', this.onMouseMove);
  },

  _mouseMove(e) {
    this.sunTween.pause();
    this.mouse.x = e.clientX - this.mainBlock.offsetLeft + (this.mainBlock.offsetWidth / 2);
    this.mouse.y = e.clientY - this.mainBlock.offsetTop + (this.mainBlock.offsetHeight / 2);

    this.onTick();
  },

  onTick() {
    let shadow = '';
    let i = 7;
    let len = i;

    const mouse = this.mouse;
    const wind = this.wind;

    while (i--) {
      shadow += ( Math.round(i * -((mouse.x - (wind.w)) / 100)) + 'px ' +
      Math.round(i * -((mouse.y - wind.h) / 100)) + 'px ' +
      (i * 6) + 'px hsla(255%,255%,255%,' + 1 / (len - 1) + '),' );
    }

    TweenMax.set(this.mainBlock, {textShadow: shadow});
  }

};

function debounce(func, wait, immediate) {
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
}
