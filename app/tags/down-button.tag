<down-button>
  <style type="text/scss">
    @import "../styles/downbutton";
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
