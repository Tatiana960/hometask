let userproperties = require('../conf/userproperties')
let signPage = require('../pages/signpage');
let homepage = require('../pages/homepage')
let methods = require('../pages/methods')
let locators = require('../pages/locators')
let EC = protractor.ExpectedConditions;

describe('Check sign in', function () {

    it('should compare two phones', async function () {
        browser.manage().timeouts().implicitlyWait(4000);
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.market.click();
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            browser.switchTo().window(handles[1]);
        })
            expect(browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');
            await locators.submit2.isEnabled().sendKeys('Note 8')
            await locators.findBtn.click()
            locators.list.then(async function (list) {
                await list[0].isEnabled().click()
                await list[1].isEnabled().click()
            });
            await locators.comparisonBtn.isEnabled().click()
            locators.list2.then(async function (list2) {
                expect(list2.length).toEqual(2);
            })
        })
    it('should delete items from the comparison list', async function () {
        browser.manage().timeouts().implicitlyWait(5000);
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.market.click();
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');
            await locators.submit2.isEnabled().sendKeys('Note 8')
            await locators.findBtn.click()
            locators.list.then(async function (list) {
                await list[0].isEnabled().click()
                await list[1].isEnabled().click()
            });
            await locators.compBtn.isEnabled().click()
        });
        locators.list2.then(async function (list2) {
            expect(list2.length).toEqual(2);
        })
        await locators.deletion.isEnabled().click()
        expect(locators.comparison.getText()).toEqual('Сравнивать пока нечего')

    });
    it('should sort cameras by price', async function () {
        browser.manage().timeouts().implicitlyWait(6000);
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.market.click();
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');
            browser.manage().window().maximize();
            let list = locators.listOfElectronicDevices.then(async function (list) {
                await list[0].isEnabled().click()
            });
            await locators.searchBtn.isEnabled().sendKeys('экшн-камеры')
            await locators.finderBtn.click()
            await locators.sortByPriceBtn.click()
            await locators.sortByPriceBtn.click()
            locators.sortByPriceBtn.getWebElement();
            expect(locators.sortByPriceBtn.getAttribute('data-autotest-id')).toBe('dprice');

        });
    });
    it('should sort by tag', async function () {
        browser.manage().timeouts().implicitlyWait(5000);
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.market.click();
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');
            browser.manage().window().maximize();
            locators.appliances.then(async function (list) {
                await list[0].isEnabled().click()
            });
            await locators.headerSearch.isEnabled().sendKeys('холодильники')
            await locators.founderBtn.click()
            await locators.width.sendKeys('50')
            locators.width.getWebElement();
            expect(locators.width.getAttribute('value')).toBe('50');
        });
    });
    it('should check Yandex music', async function () {
        browser.manage().timeouts().implicitlyWait(5000);
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        await homepage.clickSign();//to click on sign in menu
        let parentWindow = browser.getWindowHandle()
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            browser.switchTo().window(handles[1]);
        })
        expect(await signPage.username.isEnabled()).toBe(true);
        await signPage.username.click()
        await signPage.setUserName();//set username
        await signPage.submit.click()
        await signPage.setPassword();//set password
        await signPage.submit.click();//click submit button
        browser.manage().window().maximize();
        await browser.switchTo().window(parentWindow)
        await locators.music.click()
        let winHandles2 = browser.getAllWindowHandles();
        winHandles2.then(async function (handles) {
            browser.switchTo().window(handles[2]);
            expect(await browser.getCurrentUrl()).toEqual('https://music.yandex.by/home?utm_source=main_stripe_big')
            await locators.closeBtn.isEnabled().click()
            await locators.inputField.sendKeys('Metal')
            locators.artist.isEnabled().click()
        });
        browser.sleep(5000)
        locators.artist2.isEnabled()
        expect(locators.artist2.getText()).toEqual('Metallica')
        locators.albums.then(async function (list) {
            await list[0].isEnabled().click()
        })
        expect(locators.met.getText()).toEqual('Metallica')
    });

});

