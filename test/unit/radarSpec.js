define(function (require) {
    'use strict';

    var Radar = require('Radar/Radar');
    var Locator = require('Radar/Locator');

    describe('Radar', function () {

        it('should be an instance of Locator', function () {
            expect(Radar instanceof Locator).toBe(true);
        });

    });

});