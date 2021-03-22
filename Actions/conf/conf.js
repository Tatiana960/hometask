
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/test.spec.js'],
    multiCapabilities: [{
        'browserName': 'chrome',
        version: '89.0.4389.90',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            "args": [
                "disable-infobars=true", //do not show infobar that browser is under automation
                "safebrowsing-disable-download-protection", //do not show keep or save when you download a file
                "--window-size=1920x1080", //screen resolution
            ],
        }, }, {
        'browserName': 'firefox',
        version: '89.0',
        enableVNC: true,
        enableVideo: true,
        shardTestFiles: true,
        maxInstances: 1,
        'moz:firefoxOptions': {
            "args": [
                "disable-infobars=true", //do not show infobar that browser is under automation
                "safebrowsing-disable-download-protection", //do not show keep or save when you download a file
                "--window-size=1920x1080", //screen resolution
            ],

        },
    },
        {
            'browserName': 'internet explorer',
            version: '11',
            requireWindowFocus: true,

            //'ignoreProtectedModeSettings': true,
            maxInstances: 1,
            'internetExplorerOptions': {
                "args": [
                    "locationContextEnabled = true",
                    "browserConnectionEnabled= true",
                    "disable-infobars=true", //do not show infobar that browser is under automation
                    "safebrowsing-disable-download-protection", //do not show keep or save when you download a file
                    "--window-size=1920x1080", //screen resolution
                    "ie.ensureCleanSession = true."
                ],

            },
        },
        ],
        onComplete: function () {
            var browserName, browserVersion;
            var capsPromise = browser.getCapabilities();

            capsPromise.then(function (caps) {
                browserName = caps.get('browserName');
                browserVersion = caps.get('version');
                platform = caps.get('platform');

                var HTMLReport = require('protractor-html-reporter-2');

                testConfig = {
                    reportTitle: 'Protractor Test Execution Report',
                    outputPath: './',
                    outputFilename: 'ProtractorTestReport',
                    screenshotPath: './screenshots',
                    testBrowser: browserName,
                    browserVersion: browserVersion,
                    modifiedSuiteName: false,
                    screenshotsOnlyOnFailure: true,
                    testPlatform: platform
                };
                new HTMLReport().from('xmlresults.xml', testConfig);
            });
        },
        onPrepare: function () {
            var AllureReporter = require('jasmine-allure-reporter');
            jasmine.getEnv().addReporter(new AllureReporter({
                resultsDir: 'allure-results'
            }));
            var fs = require('fs-extra');

            fs.emptyDir('screenshots/', function (err) {
                console.log(err);
            });

            jasmine.getEnv().addReporter({
                specDone: function (result) {
                    if (result.status === 'failed') {
                        browser.getCapabilities().then(function (caps) {
                            var browserName = caps.get('browserName');

                            browser.takeScreenshot().then(function (png) {
                                var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                                stream.write(new Buffer(png, 'base64'));
                                stream.end();
                            });
                        });
                    }
                }
            });
        }
    }

