/* eslint-disable */
'use strict';
import gulp from 'gulp';
import firebase from 'firebase-tools';

gulp.task('deploy', () =>
  firebase
    .deploy({
      project: process.env.PROJECT_NAME,
      token: process.env.FIREBASE_TOKEN,
      cwd: '../dist'
    })
    .then(() => {
      console.log('Firebase deployed success!');
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
);
