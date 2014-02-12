/* jshint node: true */

describe('rxApp', function () {
    var scope, compile, rootScope, el;
    var validTemplate = '<rx-app></rx-app>';

    beforeEach(function () {
        // load module
        module('encore.ui.rxApp');

        // load templates
        module('templates/rxApp.html');

        // Inject in angular constructs
        inject(function ($location, $rootScope, $compile) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            compile = $compile;
        });

        el = helpers.createDirective(validTemplate, compile, scope);
    });

    it.skip('shall not pass', function () {
        // Fail initial test to keep people honest
        expect(true).to.be.false;
    });
});