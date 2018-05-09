<app>

  <style type="text/scss">
    @import "../styles/reset";
    @import "../styles/main";
    @import "../styles/sections";

    :scope {
      font-family: $fontDefaultFamily;
    }

    .form-container {
      align-self: center;
      margin: auto;
      width: 400px;
    }

    .light {
      background: $white-color-light;
    }

    .cancelled {
      text-decoration: line-through;
      text-decoration-color: red;
      -webkit-text-fill-color: rgba(0, 0, 0, .3);
    }

    p {
      font-size: 2em;
    }

    a {
      color: inherit;
      text-decoration: underline;
      outline-color: transparent;
    }

    .col1,
    .col2 {
      > p {
        white-space: pre-line;
      }
    }

    strong {
      color: $white-color;
    }

  </style>

  <pages>

    <page anchor="promo" tooltip="" class="promo">
      <div class="content">
        <promo paused="{parent.parent.sunPaused}"/>
      </div>
      <down-button/>
    </page>

    <page anchor="qweeto" tooltip="" class="qweeto">
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
        <div class="col2">
          <swiper data="{parent.parent.staticData.qweeto}"/>
        </div>
      </div>
      <down-button/>
    </page>

    <page anchor="gamearkahold" tooltip="" class="gamearkahold">
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
        <div class="col2">
          <swiper data="{parent.parent.staticData.arkahold}"/>
        </div>
      </div>

      <down-button/>
    </page>

    <page anchor="gamebotris" tooltip="" class="gamebotris">
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
        <div class="col2">
          <swiper data="{parent.parent.staticData.botris}"/>
        </div>
      </div>

      <down-button/>
    </page>

    <page anchor="game1or2" tooltip="" class="game1or2">
      <div class="content">
        <div class="col1 light cancelled">
          <h-text class="shake-up">1or2 (Cancelled)</h-text>
          <p>1 or 2? Can you answer fast enough?</p>
        </div>
        <div class="col2">
          <swiper data="{parent.parent.staticData.oneortwo}"/>
        </div>
      </div>

      <down-button/>
    </page>

    <page anchor="prostodiary" tooltip="" class="prostodiary">
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
        <div class="col2">
          <swiper data="{parent.parent.staticData.prostoDiary}"/>
        </div>
      </div>

      <down-button/>
    </page>

    <page anchor="programmingtools" tooltip="" class="programmingtools">
      <div class="content">
        <div class="col1 light">
          <h-text class="shake-up">Our programming tools</h-text>
          <p class="">We love open source software</p>
          <div class="octopus-container">
            <img src="./images/vendors/github-octocat.png"
                 alt="Join to Our GitHub"/>
          </div>
        </div>
        <div class="col2 light">
          <h-text class="shake-up">Most popular sources</h-text>

          <swiper data="{parent.parent.staticData.ourSources}"/>
        </div>
      </div>

      <down-button/>
    </page>

    <page anchor="aboutus" tooltip="" class="aboutus light">
      <h-text class="shake-up">About us</h-text>

      <div class="content">
        <swiper>

          <div class="swiper-slide menu-item">
            <h3>Corporate Philosophy</h3>
            <ul>
              <li>Trust</li>
              <li>Honesty</li>
              <li>Open</li>
              <li>Safety</li>
            </ul>
          </div>
          <div class="swiper-slide menu-item">
            <h3>Credo</h3>
            <ul>
              <li>Кастомизация и персонализация каждого клиента</li>
              <li>Оперативная и качественная разработка</li>
              <li>Предлагать лучший выбор</li>
              <li>Поддерживать мобильность в любых сферах</li>
              <li>Уникальный подход к каждой задаче</li>
              <li>Оставаться открытым и прозрачным</li>
              <li>Основываться не на личностных качествах, а на способностях, потенциале и стрелениях каждого
                сотрудника</li>
              <li>Действовать сообща для достижения высшей добродетели, свободы и богатства</li>
            </ul>
          </div>
          <div class="swiper-slide menu-item">
            <h3>Mantra</h3>
            <ul>
              <li>Больше веселья и больше денег</li>
              <li>Работа на свою собственную пользу и на свой счёт</li>
              <li>Стабильность и напряженный ритм деятельности</li>
            </ul>
          </div>
          <div class="swiper-slide menu-item">
            <h3>Strategy</h3>
            <ul>
              <li>Общество само в праве выбрать курс развития</li>
              <li>Самоуправление основываясь на принципах делегирования полномочий</li>
              <li>Работник !== Сотрудник</li>
              <li>Сотрудничество. Размышление. Обучение</li>
            </ul>
          </div>
        </swiper>
      </div>

      <down-button/>
    </page>

    <page anchor="subscribe" tooltip="" class="subscribe">
      <a href="#promo"
         tabindex="-1"
         class="start-anchor">
        <h-text class="text-logo-description shake-up">goto&thinsp;Interactive&nbsp;Software</h-text>
      </a>

      <div class="content">
        <section class="form-container">
          <submit-form></submit-form>
        </section>

        <social-buttons></social-buttons>

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
          <p>Work from 2014 to now</p>
        </footer>
      </div>
    </page>

  </pages>

  <script>
    import staticData from '../staticData';

    const that = this;
    this.staticData = staticData;

    const onHrefChange = (href) => {
      if (href.newURL.includes('promo')) {
        that.update({sunPaused: false});
      } else {
        that.update({sunPaused: true});
      }
    };
    this.on('mount', () => {
      document.body.removeAttribute('loading');
      window.addEventListener('hashchange', onHrefChange, false);
    });
    this.on('unmount', () => {
      window.removeEventListener('hashchange', onHrefChange);
    });
  </script>

</app>
