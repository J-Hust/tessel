

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

// var path = require('path');
// var av = require('tessel-av');
// var mp3 = path.join(__dirname, '01_The_Tea_Party.mp3');
// var sound = new av.Player(mp3);

// sound.play();

// sound.on('ended', function(seconds) {
//   sound.play();
// });

'use strict';
const os = require('os');
const path = require('path');
const av = require('tessel-av');
const espeak = require('espeak')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const speaker = new av.Speaker();

speaker.say(`
  Hello, this is ${os.hostname()}.
  I'm going to say my A-B-C's now
`);

speaker.on('ended', function() {
  if (alphabet.length) {
    this.say(alphabet.shift());
  }
});
