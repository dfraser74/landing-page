<app>

  <style type="text/scss">
    @import "../styles/main";

    :scope {
      font-family: $fontDefaultFamily;
    }

    .form-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      align-self: center;
      margin: auto;
    }
  </style>

  <!--TODO: component-->
  <!--<div class="loading-container">-->
    <!--<div class="loading"></div>-->
  <!--</div>-->

  <!--<pages>-->
    <!---->
    <!--<page name="promo">-->
      <!--<yield to="col1">-->
        <!--content1-->
      <!--</yield>-->
      <!--<yield to="col2">-->
        <!--content2-->
      <!--</yield>-->
    <!--</page>-->
    <!---->
    <!---->
    <!---->
  <!--</pages>-->

  <main id="fullpage">

    <section data-anchor="section0"
             class="section promo">
      <div class="content">
        <promo></promo>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section1"
             class="section qweeto">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">Qweeto (Upcoming)</h-text>

          <p class="">Social travel starts here</p>
          <a href="//t.me/qweeto"
             title="Telegram channel"
             tabindex="-1"
             rel="noopener noreferrer"
             target="_blank">Telegram channel</a>
        </div>
        <div class="col2 swiper-container">
          <swiper data="{
            [
              {
                photo: './images/pic/qweeto/01.webp'
              }
            ]
          }"/>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section2"
             class="section gamearkahold">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">Arkahold</h-text>

          <p class="">Classic oldschool minimalistic arkanoid with WebGL effects.
            20 levels, bonuses and bosses.
            3 controls: keyboard, mouse and gamepad
          </p>
          <section class="buttons">
            <a href="//www.kongregate.com/games/Baskovsky/arkahold"
               title="Play Web Game"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/kongregate.png"
                   alt="Play on Kongregate"/>
            </a>
            <a href="//github.com/gotois/Arkahold"
               title="Star Arkahold on GitHub"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/GitHub_Logo.png"
                   alt=""/>
            </a>
          </section>
        </div>
        <div class="col2 swiper-container">
          <swiper data="{
            [
              {
                youtube: 'W4sdkyspz-c'
              },
              {
                photo: './images/pic/arkahold/01.png'
              },
              {
                photo: './images/pic/arkahold/02.png'
              },
              {
                photo: './images/pic/arkahold/03.png'
              }
            ]
          }"/>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section3"
             class="section gamebotris">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">Botris</h-text>
          <p>Use your mind to win!</p>
          <section class="buttons">
            <a href="//play.google.com/store/apps/details?id=com.tewst.botris"
               title="Install Android Game"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/googleplay.png"
                   alt="Get it on Google Play"/>
            </a>
          </section>
        </div>
        <div class="col2 swiper-container">

          <swiper data="{
            [
              {
                youtube: 'iuuPUZJXyzg'
              },
              {
                photo: './images/pic/botris/01.jpg'
              },
              {
                photo: './images/pic/botris/02.jpg'
              },
              {
                photo: './images/pic/botris/03.jpg'
              }
            ]
          }">
          </swiper>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section4"
             class="section game1or2">
      <div class="content">
        <div class="col1 light cancelled">
          <h-text class="shake-up">1or2 (Cancelled)</h-text>
          <p>1 or 2? Can you answer fast enough?</p>
        </div>
        <div class="col2 swiper-container">
          <swiper data="{
            [
              {
                photo: './images/pic/1or2/01.png'
              },
              {
                photo: './images/pic/1or2/02.png'
              },
              {
                photo: './images/pic/1or2/03.png'
              },
              {
                photo: './images/pic/1or2/04.png'
              }
            ]
          }">
          </swiper>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section5"
             class="section todolist">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">To Do List</h-text>
          <p>Simple task list</p>

          <section class="buttons">
            <a href="//play.google.com/store/apps/details?id=com.tewst.todolist"
               title="Install Android App"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/googleplay.png"
                   alt="Get it on Google Play"/>
            </a>
            <a href="//github.com/gotois/todo-list"
               title="Star todo-list on GitHub"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/GitHub_Logo.png"
                   alt=""/>
            </a>
          </section>
        </div>
        <div class="col2 swiper-container">
          <swiper data="{
            [
              {
                photo: './images/pic/todo-list/01.png'
              },
              {
                photo: './images/pic/todo-list/02.png'
              }
            ]
          }"/>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section6"
             class="section prostodiary">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">ProstoDiary</h-text>
          <p>Daily journal Telegram Bot Day using aes-256-ctr crypto</p>

          <section class="buttons">
            <a href="//github.com/gotois/ProstoDiary_bot"
               title="Star ProstoDiary_bot on GitHub"
               tabindex="-1"
               rel="noopener noreferrer"
               target="_blank">
              <img src="images/vendors/GitHub_Logo.png"
                   alt=""/>
            </a>
          </section>
        </div>
        <div class="col2 swiper-container">
          <swiper data="{
            [
              {
                photo: './images/pic/prosto-diary/01.png'
              },
              {
                photo: './images/pic/prosto-diary/02.png'
              },
              {
                photo: './images/pic/prosto-diary/03.png'
              }
            ]
          }"/>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section7"
             class="section programmingtools">
      <div class="content">

        <div class="col1 light">
          <h-text class="shake-up">Our programming tools</h-text>
          <p class="">We love open source software</p>
          <div class="octopus-container">
            <img src="./images/vendors/github-octocat.png"
                 alt="Join to Our GitHub"/>
          </div>
        </div>
        <div class="col2">
          <h-text class="shake-up">Most popular sources</h-text>
          <ul>
            <li><a href="//github.com/gotois/cc_spriter"
                   rel="noopener noreferrer"
                   target="_blank">CC Spriter</a></li>
            <li><a href="//github.com/gotois/cc_spritesheet_packer"
                   rel="noopener noreferrer"
                   target="_blank">CC Spritesheet Packer</a></li>
            <li><a href="//github.com/gotois/cordova-google-oauth2"
                   rel="noopener noreferrer"
                   target="_blank">Cordova Google OAuth2</a></li>
            <li><a href="//github.com/gotois/dropbox-sdk-js"
                   rel="noopener noreferrer"
                   target="_blank">Dropbox SDK</a></li>
            <li><a href="//github.com/gotois/SkateStarterKit"
                   rel="noopener noreferrer"
                   target="_blank">Skate.js Starter Kit</a></li>
            <li><a href="//github.com/gotois/cocos2d-starter-kit"
                   rel="noopener noreferrer"
                   target="_blank">Cocos2d Starter Kit</a></li>
            <li><a href="//github.com/gotois/polymer-starter-kit"
                   rel="noopener noreferrer"
                   target="_blank">Polymer Starter Kit</a></li>
          </ul>
        </div>

      </div>

      <down-button/>
    </section>

    <section data-anchor="section8"
             class="section aboutus">
      <div class="content">
        <div class="col1">
          <h-text class="shake-up">About us</h-text>
          <p class="">Взгляд на информационное общество</p>
          <p class="">Есть идея, но кто воплощает эту идею? - Люди!</p>
          <p class="">Действовать сообща для достижения высшей добродетели, свободы и богатства</p>
          <p class="">Основываться не на личностных качествах, а на способностях, потенциале и стрелениях каждого сотрудника</p>
        </div>
        <div class="col2 light menu">
          <div class="menu-item">
            <h3>Corporate Philosophy</h3>
            <ul>
              <li>Trust</li>
              <li>Honesty</li>
              <li>Open</li>
              <li>Safety</li>
            </ul>
          </div>
          <div class="menu-item">
            <h3>Credo</h3>
            <ul>
              <li>Кастомизация и персонализация каждого клиента</li>
              <li>Оперативная и качественная разработка</li>
              <li>Предлагать лучший выбор</li>
              <li>Поддерживать мобильность в любых сферах</li>
              <li>Уникальный подход к каждой задаче</li>
              <li>Оставаться открытым и прозрачным</li>
            </ul>
          </div>
          <div class="menu-item">
            <h3>Mantra</h3>
            <ul>
              <li>Больше веселья и больше денег</li>
              <li>Работа на свою собственную пользу и на свой счёт</li>
              <li>Стабильность и напряженный ритм деятельности</li>
            </ul>
          </div>
          <div class="menu-item">
            <h3>Strategy</h3>
            <ul>
              <li>Общество само в праве выбрать курс развития</li>
              <li>Самоуправление основываясь на принципах делегирования полномочий</li>
              <li>Работник !== Сотрудник</li>
              <li>Сотрудничество. Размышление. Обучение</li>
            </ul>
          </div>
        </div>
      </div>

      <down-button/>
    </section>

    <section data-anchor="section9"
             class="section subscribe">
      <div class="content">
        <section class="form-container">
          <submit-form></submit-form>
        </section>

        <div class="col1">
          <a href="#Play"
             tabindex="-1"
             class="start-anchor">
            <h3 class="text-logo-description shake-up">goto&thinsp;Interactive&nbsp;Software</h3>
          </a>

          <social-buttons></social-buttons>
        </div>
        <div class="col2">
          <br>
          <footer>
            <p>All the World</p>
            <p title="Сделать заказ">General inquiries:
              <a href="mailto:info@gotointeractive.com"
                 title="Send email"
                 target="_top">info@gotointeractive.com</a>
            </p>
            <p>
              <!--TODO: Добавить ссылку на "Войти в gotois" для коллаборации -->
            </p>
            <p>Work from 2014 to now</p> ©&thinsp;
          </footer>
        </div>
      </div>
    </section>

  </main>

  <!--<div id="fp-nav">-->
<!---->
  <!--</div>-->

  <script>
    import fullpage from '../vendors/fullPage/javascript.fullPage';

    let fpSections;

    /**
     * @return {void}
     */
    function loadFullpage() {
      fullpage.initialize('#fullpage', {
        anchors: [
          'Play',
          'Qweeto',
          'Arkahold',
          'Botris',
          '1or2',
          'To Do List',
          'Prosto Diary',
          'Our Programming Tools',
          'About Us',
          'Subscribe'
        ],
        navigationTooltips: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        menu: '#menu',
        scrollingSpeed: 800,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 900,
        easingcss3: 'ease-in-out',
        continuousVertical: false,
        css3: true,
        keyboardScrolling: true,
        navigation: true,
        lockAnchors: true,
        animateAnchor: true,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        /**
         * @return {void}
         */
        onLeave() {

        },
        /**
         * animation text
         * @param anchorLink
         * @param index {Number}
         */
        afterLoad(anchorLink, index) {
          fpSections = document.querySelectorAll('.fp-section');
          const currentFPSection = fpSections[index - 1];
        }
      });
    }
    /**
     *
     * @param anchorLink
     * @return {Element}
     */
    function getSectionFromAnchorLink(anchorLink) {
      const currentSection = document.querySelector(`[data-anchor="${ anchorLink }"]`);

      if (!currentSection) {
        throw 'currentFunction not find';
      }

      return currentSection;
    }

    this.on('mount', () => {
      document.body.removeAttribute('loading');

      loadFullpage();

      const bullets = document.getElementById('fp-nav');
      this.root.appendChild(bullets)
    })
  </script>

</app>
