var Page = require('astrolabe').Page;

// Create astrolabe page for use
var rxAppPage = Page.create({
    url: {
        value: '/#rxApp'
    },

    // Elements
    rxAppElement: {
        get: function () {
            return this.findElement(this.by.id('rxAppElement'));
        }
    }
});

// Add midway tests to run
describe('rxApp', function () {
    var ptor = rxAppPage.driver;

    it('beforeAll', function () {
        rxAppPage.go();
    });

    it('should show element', function () {
        // will fail b/c there is no element being added in component.html
        expect(rxAppPage.rxAppElement.isDisplayed()).toEqual(true);
    });
});