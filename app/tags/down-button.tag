<down-button>
  <style type="text/scss">
    $downButtonSize: 24px;
    $downButtonImage: url(../images/down.svg);

    [downbutton]:not([hidden]) {
      position: absolute;
      display: flex;
      flex: 1;
      background: initial;
      height: $downButtonSize;
      justify-content: center;
      bottom: $downButtonSize;
      margin: 0 - ($downButtonSize / 2);
      z-index: 1;

      //noinspection ALL
      &::before,
      &::after {
        content: '';
        width: $downButtonSize;
        height: $downButtonSize;
        background-image: $downButtonImage;
        background-color: transparent;
        background-size: contain;
        background-repeat: no-repeat;
      }

      &::before {
        position: absolute;
        cursor: pointer;
        z-index: 1;
      }

      &::after {
        position: relative;
        animation-duration: .9s;
        animation-name: slide-in;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

    }
  </style>

  <div downbutton></div>

  <script>
    import fullpage from '../vendors/fullPage/javascript.fullPage';

    this.on('mount', () => {
      this.root.addEventListener('click', () => {
        fullpage.moveSectionDown();
      });
    });
  </script>
</down-button>
