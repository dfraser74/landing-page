'use strict';
import gulp from 'gulp';
import firebase from 'firebase-tools';

gulp.task('deploy', () => {

  return firebase.deploy({
    project: process.env.PROJECT_NAME,
    token: process.env.FIREBASE_TOKEN,
    cwd: '../dist'
  }).then(() => {
    console.log('Firebase deployed success!');
  }).catch(err => {
    console.log(err);
  });

});
