// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
import gulp from 'gulp';
import swPrecache from 'sw-precache';
import pkg from './../package.json';
import path from 'path';

const ROOT_DIR = 'dist';

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
  
  if (!pkg.name) {
    throw new Error('Package haven\'t name');
  }
  
  return swPrecache
    .write(filePath, {
      // Used to avoid cache conflicts when serving on localhost.
      cacheId: pkg.name,
      // sw-toolbox.js needs to be listed first. It sets up methods used in runtime-caching.js.
      importScripts: [
        'scripts/sw/sw-toolbox.js',
        'scripts/sw/runtime-caching.js'
      ],
      staticFileGlobs: [
        // Add/remove glob patterns to match your directory setup.
        `${ROOT_DIR}/images/**/*`,
        `${ROOT_DIR}/scripts/**/*.js`,
        `${ROOT_DIR}/*.{html,json,txt,xml}`
      ],
      // Translates a static file path to the relative URL that it's served from.
      // This is '/' rather than path.sep because the paths returned from
      // glob always use '/'.
      stripPrefix: `${ROOT_DIR}/`
    });
});
