import debounce from './utils/debounce';
import throttle from './utils/throttle';

export default class Sun {
  /**
   *
   * @param elem {HTMLElement}
   */
  constructor(elem) {
    this.mainBlock = elem;
    this._setWindSize();
    this.mouse = {x: 0, y: 0};
    this.onResize = debounce(this._setWindSize.bind(this), 50);
    this.onControlMove = throttle(this._controlMove.bind(this), 50);
    window.addEventListener('resize', this.onResize);
  }

  get mainBlockClientRect() {
    return this.mainBlock.getBoundingClientRect();
  }

  _setWindSize() {
    const mainBlockClientRect = this.mainBlockClientRect;
    this.wind = {
      w: parseInt(mainBlockClientRect.width),
      h: parseInt(mainBlockClientRect.height)
    };
  }

  activate() {
    document.addEventListener('pointermove', this.onControlMove);
  }

  deactivate() {
    document.removeEventListener('pointermove', this.onControlMove);
  }

  /**
   *
   * @param e {MouseEvent}
   * @private
   */
  _controlMove(e) {
    this.mouse.x = ((e.clientX || 0) - this.mainBlock.offsetLeft + (this.mainBlock.offsetWidth / 2)) >> 0;
    this.mouse.y = ((e.clientY || 0) - this.mainBlock.offsetTop + (this.mainBlock.offsetHeight / 2)) >> 0;
    this.onTick();
  }

  onTick() {
    let textShadow = '';
    let i = 8;
    const len = i;
    const mouse = this.mouse;
    const wind = this.wind;

    while (i--) {
      textShadow += `${ Math.round(i * -((mouse.x - (wind.w)) / 100)) }px 
          ${ Math.round(i * -((mouse.y - wind.h) / 100)) }px 
          ${ (i * 5) }px hsla(255, 255%, 255%, ${ 1 / (len - 1) })`;

      if (i > 0) {
        textShadow += ',';
      }

    }

    this.mainBlock.style.textShadow = textShadow;
  }

}
