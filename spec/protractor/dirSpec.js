describe('angularjs directive minus-plus: ', function() {

    var count = element(by.model('count'));
    var inc = element(by.css('.count-directive--inc'));
    var dec = element(by.css('.count-directive--dec'));

    beforeEach(function() {
        browser.get('http://localhost:63342/angular_testing/index.html');
        browser.driver.manage().window().maximize();
    });

    it('should visible directive', function() {
        expect(count.isDisplayed()).toBe(true);
    });

    it('should be 2 on load', function() {
        expect(count.getAttribute('value')).toBe('2');
    });

    it('should be 3 after inc', function() {
        inc.click();
        expect(count.getAttribute('value')).toBe('3');
    });

    it('should be 1 after dec', function() {
        dec.click();
        expect(count.getAttribute('value')).toBe('1');
    });
});