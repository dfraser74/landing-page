/**
 * @license
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 goto Interactive Software
 */
//Polyfills
import './polyfills/Array.from';

// App
import './sw_register';

import riot from 'riot';
import '../tags/promo.tag';
import '../tags/down-button.tag';
import '../tags/submit-form.tag';
import '../tags/social-buttons.tag';
import '../tags/swiper.tag';
import '../tags/h-text.tag';
import '../tags/page.tag';
import '../tags/pages.tag';
import '../tags/youtube.tag';
import '../tags/app.tag';

riot.mount('app');
