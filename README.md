LFSR
=============
Linear feedback shift register using exclusive-or (XOR) as a feedback function

```javascript
LFSR = require('lfsr');

var n = 10,
    initialState = parseInt('1010101010', 2),
    lfsr = new LFSR(n, initialState);

// get sequence of 10 pseudo-random bits
console.log(lfsr.seq(10)); // => 1018

// get string representing sequence of 10 pseudo-random bits
console.log(lfsr.seqString(10)); // => '00001010100'

```
