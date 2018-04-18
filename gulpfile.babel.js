'use strict';
import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import babel from 'gulp-babel';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const ROOT_DIR = 'dist';
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 40',
  'chrome >= 45',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Optimize images
gulp.task('images', () =>
  gulp
    .src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(`${ROOT_DIR}/images`))
    .pipe($.size({title: 'images'}))
);

// Compile and automatically prefix stylesheets
// For best performance, don't add Sass partials to `gulp.src`
gulp.task('styles', () =>
  gulp
    .src([
      'app/styles/main.scss'
    ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(`${ROOT_DIR}/styles`))
);

// Concatenate and minify JavaScript. Optionally transpiles ES2017 code to ES5.
gulp.task('scripts', () =>
  gulp
    .src([
      './app/scripts/main.js',
    ])
    .pipe($.newer('.tmp/scripts'))
    .pipe(webpackStream({
      config: require('./webpack.config.js'),
      // eslint-disable-next-line
      context: path.resolve(__dirname, './'),
      entry: './app/scripts/main.js',
      output: {
        // eslint-disable-next-line
        path: path.resolve(__dirname, ROOT_DIR),
        filename: 'scripts/main.min.js'
      }
    }, webpack))
    .pipe($.sourcemaps.init())
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify())
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`${ROOT_DIR}/scripts/`))
);

// Scan your HTML for assets & optimize them
gulp.task('html', () =>
  gulp
    .src([
      'app/**/*.html'
    ])
    .pipe($.useref({
      searchPath: '{.tmp,app}',
      noAssets: true
    }))
    // Minify any HTML
    .pipe($.if(['*.html', '!amp.html'], $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe(gulp.dest(ROOT_DIR))
);

// Clean output directory
gulp.task('clean', () => del(['.tmp', `${ROOT_DIR}/*`, `!${ROOT_DIR}/.git`], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    https: false,
    server: ['.tmp', 'app', `${ROOT_DIR}/scripts`],
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['lint', 'scripts', reload]);
  gulp.watch(['app/images/**/*'], reload);
  gulp.watch(['app/tags/**'], ['scripts', reload]);
});

// Build and serve the output from the rootDir build
gulp.task('serve:dist', ['default'], () =>
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    https: true,
    server: ROOT_DIR,
    port: 3001
  })
);

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    'styles',
    ['lint', 'html', 'scripts', 'images', 'copy-manifests'],
    'generate-service-worker',
    cb
  )
);

gulp.task('copy-manifests', () =>
  gulp
    .src([
      'app/humans.txt',
      'app/robots.txt',
      'app/manifest.json',
      'app/manifest.webapp',
      'app/opensearch.xml',
    ], {
      dot: true
    })
    .pipe(gulp.dest(`${ROOT_DIR}/`))
    .pipe($.size({title: 'copy'}))
);

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task('copy-sw-scripts', () =>
  gulp
    .src([
      'node_modules/sw-toolbox/sw-toolbox.js',
      'app/scripts/sw/runtime-caching.js'
    ])
    .pipe(gulp.dest(`${ROOT_DIR}/scripts/sw`))
);

// See http://www.html5rocks.com/en/tutorials/service-worker/introduction/ for
// an in-depth explanation of what service workers are and why you should care.
// Generate a service worker file that will provide offline functionality for
// local resources. This should only be done for the rootDir directory, to allow
// live reload to work as expected when serving from the 'app' directory.
gulp.task('generate-service-worker', ['copy-sw-scripts'], () => {
  const filePath = path.join(ROOT_DIR, 'service-worker.js');

  return swPrecache
    .write(filePath, {
      // Used to avoid cache conflicts when serving on localhost.
      cacheId: pkg.name || 'gotois',
      // sw-toolbox.js needs to be listed first. It sets up methods used in runtime-caching.js.
      importScripts: [
        'scripts/sw/sw-toolbox.js',
        'scripts/sw/runtime-caching.js'
      ],
      staticFileGlobs: [
        // Add/remove glob patterns to match your directory setup.
        `${ROOT_DIR}/images/**/*`,
        `${ROOT_DIR}/scripts/**/*.js`,
        `${ROOT_DIR}/styles/**/*.css`,
        `${ROOT_DIR}/*.{html,json,txt,xml}`
      ],
      // Translates a static file path to the relative URL that it's served from.
      // This is '/' rather than path.sep because the paths returned from
      // glob always use '/'.
      stripPrefix: `${ROOT_DIR}/`
    });
});

try {
  // Load custom tasks from the `tasks` directory
  // eslint-disable-next-line
  require('require-dir')('tasks');
} catch (err) {
  console.error(err);
}
