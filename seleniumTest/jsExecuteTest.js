var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('クライアントjavaScript実行', function() {
    var driver;

    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    test.it('クライアントJavaScript関数を実行し戻り値をnode.jsにリターンする', function() {
        driver.get('localhost:3000/test.html');
        driver.executeScript(function(){
            return baiGaeshi(2);
        }).
        then(function(res){
            assert.equal(res,4,'クライアント側関数baiGaeshi()が呼ばれている');
        });
        
    });

    test.after(function() {
        driver.quit();
    });
}); 