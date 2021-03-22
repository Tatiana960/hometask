const {browser} = require( "protractor" );

const {Builder, By, until, Key} = require('selenium-webdriver');
let methods = require('../pages/methods')
const actions = browser.actions();
const{Keys} = require('protractor');
let EC = protractor.ExpectedConditions;

describe('actions. jsscripts, EC', function () {

    fit('should click, scroll, input text with using Actions', async function () {
        await browser.waitForAngularEnabled(false)
        browser.get('http://juliemr.github.io/protractor-demo/');
        var inp = element(by.model('first'))
        var secondInput = element(by.model('second'))
        var submit = element(by.id('gobutton'))
        var list = element(by.model('operator'))
        browser.actions()
            .click(await inp.getWebElement())
        inp.sendKeys('3')
        actions.sendKeys(Key.PAGE_DOWN)
            .click(await secondInput.getWebElement())
        secondInput.sendKeys('4')
            .click(await submit.getWebElement())
        //.perform();
    })
    it('should use Expected conditions', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://yandex.by');
        browser.wait(EC.titleContains('Яндекс'), 5000);
        browser.wait(EC.urlContains('yandex'), 5000);
        browser.wait(EC.presenceOf(element(by.partialLinkText('Войти в почту'))), 5000);
        browser.wait(EC.elementToBeClickable(element(by.
        className('input__control input__input mini-suggest__input'))), 5000);
    })
    it('should use js script for clicking and input text', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://yandex.by');
        let submit = element(by.className('input__control input__input mini-suggest__input'))
        browser.executeScript("arguments[0].click();", submit)
        browser.executeScript("arguments[0].value='testuser'", submit)
    })
});

