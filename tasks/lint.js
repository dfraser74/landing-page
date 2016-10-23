'use strict';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src('app/scripts/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);
