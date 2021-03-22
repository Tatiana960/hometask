
class Locators {

    sign = element(by.partialLinkText('Войти'))
    username = element(by.css('#passp-field-login'));
    submit = element(by.className('passp-sign-in-button'))
    password = element(by.id('passp-field-passwd'))
    userAccountname = element(by.className('user-account_has-ticker_yes'));
    exit = element(by.
    cssContainingText('.menu__text','Выйти из сервисов Яндекса'))
    errormessage = element(by.className('Textinput-Hint_state_error'))
    market = element(by.linkText('Маркет'));
    music = element(by.linkText('Музыка'));
    submit2 = element(by.className('nQ8aBP7fBN'))
    findBtn = element(by.className('_1XiEJDPVpk'))
    comparisonBtn = element(by.partialLinkText('Сравнить'))
    list = (element.all(by.className('_1CXljk9rtd')))
    list2 = element.all(by.className('LwwocgVx0q _2VGDFjE-Ev'))
    compBtn = element(by.partialLinkText('Сравнить'))
    deletion = element(by.buttonText('Удалить список'))
    comparison = element(by.className('_2szVRO2K75'))
    listOfElectronicDevices = element.all(by.linkText('Электроника'))
    searchBtn = element(by.id('header-search'))
    finderBtn = element(by.buttonText('Найти'))
    sortByPriceBtn = element(by.buttonText('по цене'))
    appliances = element.all(by.linkText('Бытовая техника'))
    headerSearch = element(by.id('header-search'))
    founderBtn = element(by.buttonText('Найти'))
    width = element(by.name('Ширина до'))
    closeBtn = element(by.className('payment-plus__header-close'))
    inputField = element(by.className('d-input__field'))
    artist = element(by.css('[href="/artist/3121"]'))
    artist2 = element(by.className('page-artist__title typo-h1 typo-h1_big'))
    albums = (element.all(by.css('[href="/artist/3121/albums"]')))
    met = element(by.className('page-artist__title typo-h1 typo-h1_big'))
}

module.exports = new Locators()