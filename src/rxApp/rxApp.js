/*jshint undef:false*/
angular.module('encore.ui.rxApp', [])
.directive('rxApp', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/rxApp.html'
    };
})
.directive('rxAppNav', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxAppNav.html',
        scope: {
            items: '=',
            level: '='
        }
    };
})
.directive('rxAppNavItem', function ($compile, $location) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxAppNavItem.html',
        link: function (scope, element) {
            scope.level = scope.level + 1;
            var rxNavHtml = '<rx-app-nav items="item.children" level="level"></rx-app-nav>';
            if (angular.isArray(scope.item.children)) {
                $compile(rxNavHtml)(scope, function (cloned) {
                    element.append(cloned);
                });
            }

            var isActive = function (pattern) {
                console.log(pattern);
                return $location.path().indexOf(pattern) !== -1;
            };

            scope.item.active = scope.item.active || isActive(scope.item.href);
        }
    };
});