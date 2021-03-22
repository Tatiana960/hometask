//import {protractor} from "protractor";

class Methods {

    async ignoreAngular() {
        await browser.waitForAngularEnabled(false);
    }

    async getSite() {
        await browser.get('https://yandex.by')
    }
}


module.exports = new Methods()