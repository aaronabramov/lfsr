// Max-length feedback polynomals for shift register
// e.g.
// N=19
// x^19 + x^18 + x^17 + x^15 + 1 will give max length sequence of 524287
var TAPS = {
    2: [2, 1], // 3
    3: [3, 2], // 7
    4: [4, 3], // 15
    5: [5, 3], // 31
    6: [6, 5], // 63
    7: [7, 6], // 127
    8: [8, 6, 5, 4], // 255
    9: [9, 5], // 511
    10: [10, 7], // 1023
    11: [11, 9], // 2027
    12: [12, 11, 10, 4], // 4095
    13: [13, 12, 11, 8], // 8191
    14: [14, 13, 12, 2], // 16383
    15: [15, 14], // 32767
    16: [16, 14, 13, 11], // 65535
    17: [17, 14], // 131071
    18: [18, 11], // 262143
    19: [19, 18, 17, 15] // 524287
};

/**
 * @param {Number} n number of bits
 * @param {Number} start state
 */
function LFSR(n, seed) {
    this.n = n;
    this.taps = TAPS[n];
    var mask = parseInt(Array(n + 1).join('1'), 2);
    // Get last n bit from the seed if it's longer
    this.register = (seed & mask);
}

LFSR.prototype = {
    shift: function() {
        var tapsNum = this.taps.length,
            i,
            bit = this.register >> (this.n - this.taps[0]);
        for (i = 1; i < tapsNum; i++) {
            bit = bit ^ (this.register >> (this.n - this.taps[i]));
        }
        bit = bit & 1;
        this.register = (this.register >> 1) | (bit << (this.n - 1));
        return bit & 1;
    },
    maxLenSeq: function() {
        var initialState = this.register,
            counter = 0;
        do {
            this.shift();
            counter++;
        } while (initialState != this.register);
        return counter;
    }
};

module.exports = LFSR;
