"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 000-chrome.', function () {
  test('chrome34 ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1760.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1760.0 Safari/537.36');

    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc', 'Expected actual "Browser_Maker" to be \'Google Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '34.0', 'Expected actual "Version" to be \'34.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '34', 'Expected actual "MajorVer" to be \'34\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win7', 'Expected actual "Platform" to be \'Win7\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.1', 'Expected actual "Platform_Version" to be \'6.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation', 'Expected actual "Platform_Maker" to be \'Microsoft Corporation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop', 'Expected actual "Device_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop', 'Expected actual "Device_Code_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('chrome31 ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');

    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc', 'Expected actual "Browser_Maker" to be \'Google Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '31.0', 'Expected actual "Version" to be \'31.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '31', 'Expected actual "MajorVer" to be \'31\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation', 'Expected actual "Platform_Maker" to be \'Linux Foundation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Linux Desktop', 'Expected actual "Device_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Linux Desktop', 'Expected actual "Device_Code_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
