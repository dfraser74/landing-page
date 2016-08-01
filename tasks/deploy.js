'use strict';
import gulp from 'gulp';
import firebase from 'firebase-tools';

gulp.task('deploy', (cb) => {

  return firebase.deploy({
    project: 'tewst-landing-page',
    token: process.env.FIREBASE_TOKEN,
    cwd: '../dist'
  }).then(() => {
    console.log('Firebase deployed success!');
    cb();
  }).catch(err => {
    console.log(err);
  });

});
