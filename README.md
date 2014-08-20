LFSR
=============
Linear feedback shift register using exclusive-or (XOR) as a feedback function written in javascript

[![Build Status](https://travis-ci.org/dmitriiabramov/lfsr.svg?branch=master)](https://travis-ci.org/dmitriiabramov/lfsr)

```javascript
LFSR = require('lfsr');

var bitLength = 10,
    initialState = parseInt('1010101010', 2), // seed
    lfsr = new LFSR(bitLength, initialState);

// get sequence of 10 pseudo-random bits
lfsr.seq(10); // => 1018

// get string representing sequence of 10 pseudo-random bits
lfsr.seqString(10); // => '00001010100'


// Initialize register with default values
// n = 31
lfsr = LFSR();
lfsr.seqString(15) // => '001000010100111'

```

### Runing tests
`npm test`
