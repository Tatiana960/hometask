var webdriver = require('selenium-webdriver');

class Singletone {

    Singletone = (function () {
        var instance;

        return function Construct_singletone() {
            if (instance) {
                return instance;
            }
            if (this && this.constructor === Construct_singletone) {
                instance = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome())
                    .build();
                return instance;
            } else {
                return new Construct_singletone();
            }
        }
    }());
    a =  new Singletone();
}
module.exports = new Singletone()