"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 012.', function () {
  test('issue-012-a ["Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko');

    assert.strictEqual(browser['Browser'], 'IE', 'Expected actual "Browser" to be \'IE\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation', 'Expected actual "Browser_Maker" to be \'Microsoft Corporation\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '11.0', 'Expected actual "Version" to be \'11.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '11', 'Expected actual "MajorVer" to be \'11\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win8.1', 'Expected actual "Platform" to be \'Win8.1\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.3', 'Expected actual "Platform_Version" to be \'6.3\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation', 'Expected actual "Platform_Maker" to be \'Microsoft Corporation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], true, 'Expected actual "Win64" to be true (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop', 'Expected actual "Device_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop', 'Expected actual "Device_Code_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident', 'Expected actual "RenderingEngine_Name" to be \'Trident\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], '7.0', 'Expected actual "RenderingEngine_Version" to be \'7.0\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation', 'Expected actual "RenderingEngine_Maker" to be \'Microsoft Corporation\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-012-b ["Mozilla/5.0 (Windows NT 6.3; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.3; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation', 'Expected actual "Browser_Maker" to be \'Mozilla Foundation\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '24.0', 'Expected actual "Version" to be \'24.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '24', 'Expected actual "MajorVer" to be \'24\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win8.1', 'Expected actual "Platform" to be \'Win8.1\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.3', 'Expected actual "Platform_Version" to be \'6.3\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation', 'Expected actual "Platform_Maker" to be \'Microsoft Corporation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], true, 'Expected actual "Win64" to be true (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop', 'Expected actual "Device_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop', 'Expected actual "Device_Code_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], '24.0', 'Expected actual "RenderingEngine_Version" to be \'24.0\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation', 'Expected actual "RenderingEngine_Maker" to be \'Mozilla Foundation\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
