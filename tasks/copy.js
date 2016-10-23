'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp
    .src([
      'app/*',
      'app/**',
      '!app/images/**',
      '!app/scripts/**',
      '!app/styles/**',
      '!app/*.html',
      'node_modules/apache-server-configs/dist/.htaccess'
    ], {
      dot: true
    })
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}))
);
