import gulp from 'gulp';
import firebase from 'firebase-tools';

const ROOT_DIR = 'dist';

gulp.task('deploy', () =>
  firebase
    .deploy({
      project: process.env.PROJECT_NAME,
      token: process.env.FIREBASE_TOKEN,
      cwd: `../${ROOT_DIR}`
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
