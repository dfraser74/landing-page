#!/usr/bin/env bash
gulp default

cp -r app/vendors dist/

# uncomment for deploy to firebase hosting
#firebase deploy;

exit 0
