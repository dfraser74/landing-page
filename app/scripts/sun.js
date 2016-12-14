(function (window) {

  class Sun {
    /**
     *
     * @param elem {HTMLElement}
     */
    constructor(elem) {
      const mainBlock = this.mainBlock = elem;
      const mouse = this.mouse = {x: 0, y: 0};
      const mainBlockClientRect = this.mainBlockClientRect;

      this.wind = {
        w: parseInt(mainBlockClientRect.width),
        h: parseInt(mainBlockClientRect.height)
      };
      this.sunTween = TweenMax.fromTo(mouse, 3, {
        x: parseInt(mainBlock.offsetWidth / 2),
        y: parseInt(mainBlock.offsetHeight / 2)
      }, {
        yoyo: true,
        repeat: -1,
        x: 0,
        y: 0,
        ease: Power3.easeInOut
      });
      this.onControlMove = debounce(this._controlMove.bind(this), 5);
    }

    get mainBlockClientRect() {
      return this.mainBlock.getBoundingClientRect();
    }

    activate() {
      document.addEventListener('touchmove', this.onControlMove);
      document.addEventListener('mousemove', this.onControlMove);
      this.onTick();
    }

    deactivate() {
      document.removeEventListener('touchmove', this.onControlMove);
      document.removeEventListener('mousemove', this.onControlMove);
    }

    _controlMove(e) {
      this.sunTween.pause();
      this.mouse.x = (e.clientX || 0) - this.mainBlock.offsetLeft + (this.mainBlock.offsetWidth / 2);
      this.mouse.y = (e.clientY || 0) - this.mainBlock.offsetTop + (this.mainBlock.offsetHeight / 2);

      this.onTick();
    }

    onTick() {
      let textShadow = '';
      let i = 8;
      const len = i;
      const mouse = this.mouse;
      const wind = this.wind;

      while (i--) {
        textShadow += `
          ${ Math.round(i * -((mouse.x - (wind.w)) / 100)) }px 
          ${ Math.round(i * -((mouse.y - wind.h) / 100)) }px 
          ${ (i * 5) }px hsla(255%, 255%, 255%, ${ 1 / (len - 1) }),'
        `;
      }

      TweenMax.set(this.mainBlock, {textShadow});
    }

  }

  function debounce(func, wait, immediate) {
    let timeout;

    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;

        if (!immediate) {
          func.apply(context, args);
        }

      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }

    };
  }

  window.Sun = Sun;
}(window));
