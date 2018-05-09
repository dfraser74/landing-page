<h-text>

  <style type="text/scss">
    $fontSize: 1.074em;

    @import "../styles/_colors.scss";
    @import "../styles/_mixins.scss";
    @import "../styles/_fonts.scss";

    :scope {
      display: block;
      color: $primary-color;
      background: -webkit-linear-gradient(lighten($primary-color, 30%), $primary-color);
      -webkit-background-clip: text;
      //noinspection CssInvalidPropertyValue
      background-clip: text;
      -webkit-text-fill-color: hsla(0, 0, 0, 0);
      font-size: 4vmax;
      font-family: $fontMonoFamily;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  </style>

  <yield/>

  <script>
    this.on('mount', () => {
      this.root.classList.add('active');
    });
    this.on('unmount', () => {
      this.root.classList.remove('active');
    });
  </script>
</h-text>
