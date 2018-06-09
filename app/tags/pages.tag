<!--
    * fullPage Pure Javascript v.0.0.4 (Alpha) - Not support given until Beta version.
    * https://github.com/alvarotrigo/fullPage.js
    * MIT licensed
    *
    * forked by qertis (2016)
    * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
    */
-->
<pages>

  <style type="text/scss">
    @import "../styles/colors";
    @import "../styles/mixins";

    $fontFamily: 'Lato', sans-serif;
    $fpNavMargin: 17px;
    $fpTooltipMargin: 20px;

    html.fp-enabled,
    .fp-enabled body {
      margin: 0;
      padding: 0;
      overflow: hidden;

      /*Avoid flicker on slides transitions for mobile phones #336 */
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    #superContainer {
      position: relative;
      height: 100%;
      touch-action: none;
    }

    .fp-section {
      position: relative;
      box-sizing: border-box;
      height: 100%;
    }

    .fp-slide {
      float: left;

      .fp-slidesContainer {
        display: block;
        height: 100%;
      }

    }

    .fp-slides {
      position: relative;
      z-index: 1;
      height: 100%;
      overflow: hidden;
      transition: all 0.3s ease-out;
    }

    .fp-section.fp-table, .fp-slide.fp-table {
      display: table;
      table-layout: fixed;
      width: 100%;
      height: 100%;
    }

    .fp-tableCell {
      display: table-cell;
      vertical-align: middle;
      width: 100%;
      height: 100%;
    }

    .fp-slidesContainer {
      position: relative;
      float: left;
    }

    .fp-controlArrow {
      position: absolute;
      z-index: 4;
      top: 50%;
      cursor: pointer;
      width: 0;
      height: 0;
      border-style: solid;
      margin-top: -38px;

      &.fp-prev {
        left: 15px;
        width: 0;
        border-width: 38.5px 34px 38.5px 0;
        border-color: transparent #fff transparent transparent;
      }

      &.fp-next {
        right: 15px;
        border-width: 38.5px 0 38.5px 34px;
        border-color: transparent transparent transparent #fff;
      }

    }

    .fp-scrollable {
      overflow: scroll;
    }

    .fp-notransition {
      transition: none !important;
    }

    #fp-nav ul,
    #fp-nav ul li,
    #fp-nav ul li a {
      outline: none;
    }

    .fp-slidesNav {
      position: absolute;
      z-index: 4;
      left: 50%;
      opacity: 1;
    }

    #fp-nav ul,
    .fp-slidesNav ul {
      margin: 0;
      padding: 0;
    }

    #fp-nav ul li,
    .fp-slidesNav ul li {
      position: relative;
      display: block;
      width: 14px;
      height: 13px;
      margin: 7px;
    }

    .fp-slidesNav ul li {
      display: inline-block;
    }

    #fp-nav ul li a,
    .fp-slidesNav ul li a {
      position: relative;
      display: block;
      z-index: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
      text-decoration: none;
    }

    #fp-nav ul li a.active span,
    .fp-slidesNav ul li a.active span,
    #fp-nav ul li:hover a.active span,
    .fp-slidesNav ul li:hover a.active span {
      height: 12px;
      width: 12px;
      margin: -6px 0 0 -6px;
      border-radius: 100%;
    }

    #fp-nav ul li a span,
    .fp-slidesNav ul li a span {
      position: absolute;
      border-radius: 50%;
      z-index: 1;
      height: 4px;
      width: 4px;
      border: 1px solid black;
      background: #333;
      left: 50%;
      top: 50%;
      margin: -2px 0 0 -2px;
      transition: all 0.1s ease-in-out;

      &:hover {
        border: 1px solid transparent;
      }
    }

    #fp-nav ul li a.active span {
      border: 1px solid transparent;
    }

    #fp-nav ul li:hover .fp-tooltip,
    #fp-nav.fp-show-active a.active + .fp-tooltip {
      transition: opacity 0.2s ease-in;
      width: auto;
      opacity: 1;
    }

    #main {
      background: url('../images/background.png');
    }

    #fp-nav {
      position: fixed;
      z-index: 100;
      margin-top: -32px;
      top: 50%;
      opacity: 1;

      &.left {
        left: $fpNavMargin;
      }

      &.right {
        right: $fpNavMargin;
      }

      &.bottom {
        bottom: $fpNavMargin;
      }

      &.top {
        top: $fpNavMargin;
      }

      ul li {
        .fp-tooltip.left {
          left: $fpTooltipMargin;
        }

        .fp-tooltip.right {
          right: $fpTooltipMargin;
        }
      }

      ul li .fp-tooltip {
        position: absolute;
        display: block;
        top: -2px;
        color: white;
        font-size: 14px;
        font-family: $fontFamily;
        white-space: nowrap;
        max-width: 220px;
        overflow: hidden;
        opacity: 0;
        width: 0;
      }

      &.right {
        right: 8px !important;
      }

      a > span {
        @include ball-size;
        @include bullet-border($white-color-light);
        background: hsl(0, 0, 0);
        opacity: .2;

        &:hover {
          opacity: 1;
        }
      }

      a.active > span {
        margin: 0 -2px !important;
        @include bullet-border();
        opacity: 1;
      }

    }

  </style>

  <main id="main">
    <yield/>
  </main>

  <script>
    import fullpage from '../vendors/fullPage/javascript.fullPage';

    this.on('mount', () => {
      const pageValues = Object.values(this.tags.page);
      const anchors = pageValues.map(tag => tag.opts.anchor);
      const tooltips = pageValues.map(tag => tag.opts.tooltip);

      fullpage.initialize('#main', {
        // nav
        menu: '#menu',
        lockAnchors: true,
        anchors: anchors,
        navigation: true,
        navigationTooltips: tooltips,
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: false,

        // scroll
        css3: true,
        easingcss3: 'ease-in-out',
        easing: 'easeInOutCubic',
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 900,
        scrollingSpeed: 800,
        continuousVertical: false,
        continuousHorizontal: false,
        interlockedSlides: false,
        dragAndMove: false,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 3,

        // access
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        // design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        lazyLoading: true,
      });

      const bullets = document.getElementById('fp-nav');
      this.root.appendChild(bullets)
    })
  </script>

</pages>
