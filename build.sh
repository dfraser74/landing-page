#!/usr/bin/env bash
gulp default

cp -r app/vendors dist/

# `./build.sh deploy` for deploy to firebase hosting
if [ $1 = "deploy" ]
  then
    firebase deploy
fi

exit
