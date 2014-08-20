var LFSR = require('../index.js');

/**
 * @param {String} binaryString string representitg binary ('101010')
 * @return {Number} parsed integer
 */
exports.bin = function(binaryString) {
    return parseInt(binaryString, 2);
};

exports.str = function(number) {
    return number.toString(2);
};

/**
 * @param {Function} fn callback that will be called for every
 * bit length available
 */
exports.everyLength = function(upto, fn) {
    if (typeof upto === 'function') {
        fn = upto;
        upto = null;
    }
    for (var n in LFSR.prototype.TAPS) {
        if (!upto || parseInt(n) <= upto) {
            fn.call(this, parseInt(n));
        }
    }
};
