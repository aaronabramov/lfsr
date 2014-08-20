var LFSR = require('../index.js'),
    expect = require('chai').expect,
    utils = require('./utils.js'),
    bin = utils.bin,
    str = utils.str;


describe('lfsr', function() {
    describe('constructor', function() {
        it('ajusts seed to required length if it is longer', function() {
            var lfsr;
            lfsr = new LFSR(4, bin('10101010'));
            expect(str(lfsr.register).length).to.equal(4);
        });

        it('assigns default bit length', function() {
            var lfsr = new LFSR();
            expect(LFSR.prototype.DEFAULT_LENGTH).to.be.a('number');
            expect(lfsr.n).to.equal(LFSR.prototype.DEFAULT_LENGTH);
        });

        utils.everyLength(function(n) {
            (function(n) {
                it('assigns default initial state for n = ' + n, function() {
                    var lfsr = new LFSR(n);
                    expect(str(lfsr.register).length).to.equal(n);
                });
            })(n);
        });
    });
});
