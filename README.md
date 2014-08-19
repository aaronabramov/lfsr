LFSR
=============
Linear feedback shift register using exclusive-or (XOR) as a feedback function written in javascript

```javascript
LFSR = require('lfsr');

var bitLength = 10,
    initialState = parseInt('1010101010', 2), // seed
    lfsr = new LFSR(bitLength, initialState);

// get sequence of 10 pseudo-random bits
lfsr.seq(10); // => 1018

// get string representing sequence of 10 pseudo-random bits
lfsr.seqString(10); // => '00001010100'

```
