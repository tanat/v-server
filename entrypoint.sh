#!/bin/bash

npm install

if [[ $DEBUG = "True" ]]; then
  ./node_modules/nodemon/bin/nodemon.js /var/www/index.js
else
  ./node_modules/forever/bin/forever --fifo /var/www/index.js
fi
