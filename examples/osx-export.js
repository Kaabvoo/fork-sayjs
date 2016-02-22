#!/usr/bin/env node

'use strict';

var say = require('../');

// no callback, fire and forget
say.export('whats up, dog?', 'Alex', 30, './exported.wav', function (error){
  if (error) {
    return console.log(error);
  }

  console.log('export complete');
});
