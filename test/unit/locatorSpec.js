define(function (require) {
    'use strict';

    var Locator = require('Radar/Locator');

    describe('Locator', function () {

        var locator;
        var service = { whatever : function () {} };
        var key = 'key';

        beforeEach(function () {
            locator = new Locator();
        });

        it('should have a get and set method', function () {
            expect(locator.set).toBeDefined();
            expect(locator.get).toBeDefined();
        });

        it('should throw an error when trying to register a service twice', function () {
            expect(function () { locator.set(key, service); }).not.toThrow();
            expect(function () { locator.set(key, service); }).toThrow();
        });

        it('should throw an error when trying to get a that isn\'t defined', function () {
            expect(function () { locator.get(key); }).toThrow();
        });

        it('should return the same service for the same key', function () {
            locator.set(key, service);
            expect(locator.get(key)).toEqual(service);
        });

    });

});