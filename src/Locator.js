define(function () {
    'use strict';

    function Locator() {
        this.services = {}
    }

    Locator.prototype = {

        'set' : function (key, service) {
            if (this.services[key]) {
                throw new Error('Service already registered');
            }
            this.services[key] = service;
        },
        'get' : function (key) {
            if (!this.services[key]) {
                throw new Error('Service not configured');
            }
            return this.services[key];
        }
    };

    return Locator;
});






