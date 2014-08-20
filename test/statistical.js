var LFSR = require('../index.js'),
    expect = require('chai').expect,
    utils = require('./utils.js'),
    bin = utils.bin,
    str = utils.str;

context('statistical', function() {
    utils.everyLength(function(n) {
        (function(n) {
            it('max length for n = ' + n + ' is ' + (Math.pow(2, n) - 1), function() {
                this.timeout(160000);

                var lfsr = new LFSR(n),
                    count = 0,
                    initial = lfsr.register;
                do {
                    lfsr.shift();
                    count++;
                } while (lfsr.register != initial);
                expect(count).to.equal(Math.pow(2, n) - 1);
            });
        })(n);
    });

    describe('distribution', function() {
        utils.everyLength(function(n) {
            (function(n) {
                it('evenly distributes bits for n = ' + n, function() {
                    var lfsr = new LFSR(),
                        occur = {'0': 0, '1': 0},
                        bit;
                    for (var i = 0; i < 100000; i++) {
                        bit = lfsr.shift();
                        occur[bit]++;
                    }
                    var ratio = occur['0'] / occur['1'];
                    expect(ratio).to.be.closeTo(1, 0.1);
                });
            })(n);
        });
    });
});
