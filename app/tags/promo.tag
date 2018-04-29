<promo>

  <style type="text/scss">
    @import "../styles/fonts";
    @import "../styles/colors";

    //noinspection CssInvalidPseudoSelector
    :scope {
      height: 100%;
      flex-direction: column;
      display: flex;
    }

    h1 {
      max-width: 99vw !important;
      color: $white-color !important;
      font-family: $fontDefaultFamily !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 5vmax !important;
    }

    .logo-container {
      display: flex;
      flex: 1;
      justify-content: center;
      width: calc(100% - 58px);
      margin: auto;
      align-items: flex-end;
      align-self: center;

      > .description {
        z-index: 1;
        transition: text-shadow .1s ease-in-out;
        will-change: text-shadow;
        text-align: center;
        text-rendering: optimizeLegibility;
        font-weight: 700;
        letter-spacing: .1em;
        text-shadow: 0 0 16px hsla(0, 0, 0, .6);
        line-height: 1.5em !important;
        font-family: $fontMonoFamily;
      }

    }

  </style>

  <div class="logo-container">
    <!--class: shake-down-->
    <h1 ref="logo"
        class="description"
        title="gotois: Play anywhere">goto&thinsp;Interactive&nbsp;Software</h1>
  </div>
  <div class="text-container">
    <!--class: shake-up-->
    <h3 class="description">Play&nbsp;anywhere</h3>
    <p class="scroll-down-text">Scroll down for details</p>
  </div>

  <script>
    import debounce from '../scripts/utils/debounce';
    import throttle from '../scripts/utils/throttle';

    class Sun {
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
        this.onResize();
      }
      /**
       *
       * @return {ClientRect}
       */
      get mainBlockClientRect() {
        return this.mainBlock.getBoundingClientRect();
      }
      /**
       *
       * @private
       */
      _setWindSize() {
        const mainBlockClientRect = this.mainBlockClientRect;
        this.wind = {
          w: parseInt(mainBlockClientRect.width),
          h: parseInt(mainBlockClientRect.height)
        };
      }
      /**
       * @return {void}
       */
      activate() {
        document.addEventListener('pointermove', this.onControlMove);
      }
      /**
       * @return {void}
       */
      deactivate() {
        document.removeEventListener('pointermove', this.onControlMove);
      }
      /**
       *
       * @param e {MouseEvent}
       * @private
       * @return {void}
       */
      _controlMove(e) {
        this.mouse.x = ((e.clientX || 0) - this.mainBlock.offsetLeft + (this.mainBlock.offsetWidth / 2)) >> 0;
        this.mouse.y = ((e.clientY || 0) - this.mainBlock.offsetTop + (this.mainBlock.offsetHeight / 2)) >> 0;
        this.onTick();
      }
      /**
       * @return {void}
       */
      onTick() {
        let textShadow = '';
        let i = 6;
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

    this.on('mount', () => {
      const sun = new Sun(this.refs.logo);
      sun.activate();

      // TODO: если в другом роутере - отключать
      // console.log('deactivate')
      // sun.deactivate();
    });

  </script>

</promo>
