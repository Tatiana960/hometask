let locators = require('../pages/locators')
let userproperties = require('../conf/userproperties')

class SignPage {

    constructor() {
        this.username = locators.username;
        this.password = locators.password;
        this.submit = locators.submit;
        this.userAccountname = locators.userAccountname
        this.exit = locators.exit
        this.errormessage = locators.errormessage
    }

    async setUserName() {
        await locators.username.sendKeys(userproperties.username);
    }

    async setWrongUserName() {
        await locators.username.sendKeys(userproperties.wrongUserName);
    }

    async setPassword() {
        await locators.password.sendKeys(userproperties.password);
    }

    async setWrongPassword() {
        await locators.password.sendKeys(userproperties.wrongUserPassword);
    }
}
module.exports = new SignPage();