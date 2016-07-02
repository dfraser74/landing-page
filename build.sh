#!/usr/bin/env bash
gulp default

cp -r app/vendors dist/

# `./build.sh deploy` for deploy to firebase hosting
if [ ! -z $1 ]
then :
  if [ "deploy" = $1 ]
    then
      echo "firebase deploy"
      firebase deploy
  fi
else :
     echo "without deploy"
fi

exit
