/*jshint undef:false*/
angular.module('encore.ui.rxModalAction', ['ui.bootstrap'])
.directive('rxModalForm', function () {
    return {
        transclude: true,
        templateUrl: 'templates/rxModalActionForm.html',
        restrict: 'E',
        scope: {
            title: '@',
            subtitle: '@',
            isLoading: '=',
            submitText: '@',
            cancelText: '@'
        }
    };
})
.controller('rxModalCtrl', function ($scope, $modalInstance) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;
})
.directive('rxModalAction', function ($modal) {
    var createModal = function (config, scope) {
        var modal = $modal.open({
            templateUrl: config.templateUrl,
            controller: 'rxModalCtrl',
            scope: scope
        });

        return modal;
    };

    return {
        transclude: true,
        templateUrl: 'templates/rxModalAction.html',
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs) {
            // add any class passed in to scope
            scope.classes = attrs.classes;

            var focusLink = function () {
                element.find('a')[0].focus();
            };

            var handleSubmit = function () {
                focusLink();

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function
                scope.$eval(attrs.postHook);

                // once we're done with the scope, reset the fields
                scope.fields = {};
            };

            scope.showModal = function (evt) {
                evt.preventDefault();

                // TODO don't like having to create a 'fields' property in here,
                // but we need it so that the child input fields can bind to the modalScope
                scope.fields = scope.fields || {};

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function (if it exists)
                scope.$eval(attrs.preHook);

                var modal = createModal(attrs, scope);

                modal.result.then(handleSubmit, focusLink);
            };
        }
    };
});