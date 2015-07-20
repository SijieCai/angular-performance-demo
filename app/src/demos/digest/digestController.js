(function() {
    var module = angular.module('app');
    module.controller('digestController', ['$scope', function($scope) {
        var digest = 0;
        $scope.value = 0;
        $scope.$watch(function() {
            digest++;
            console.log('Digest Loop被执行' + digest + '次');

            if ($scope.value >= 4 && $scope.value < 10) {
                $scope.value++;
            }
        });

        $scope.inc = function() {
            $scope.value++;
            digest = 0;
            console.log('点击事件');
        };


        $scope.getUnchangedValue = function() {
            // time consuming operation
            // for (var i = 0; i < 3000000000; i++) {
            //     i = Math.sqrt(100) + i;
            // }
            var i = 0;
            return i;
        };
        $scope.unchangedValue = $scope.getUnchangedValue();

    }]);

    module.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('digest', {
            url: "/demos/digest",
            templateUrl: "src/demos/digest/digest.html"
        });

    });
})();
