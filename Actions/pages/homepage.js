let locators = require('../pages/locators')

class HomePage {

    constructor() {
        this.sign = locators.sign;
    }
    async clickSign() {
        await locators.sign.click()
    }
}
module.exports = new HomePage();