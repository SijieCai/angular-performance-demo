(function() {
    var module = angular.module('app');

    module.controller('watcherController', ['$scope', function($scope) {

        $scope.widgets = [];

        showAngularStats({
            "position": "topright",
            "digestTimeThreshold": 16,
            "autoload": false,
            "logDigest": true,
            "logWatches": true
        });

        $scope.addWidget = function() {
            $scope.widgets.push({});
        };
        $scope.addOnceWidget= function(){
            $scope.onceWidgets = $scope.onceWidgets || [];
            $scope.onceWidgets.push({});
        }
    }]);

    module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('watcher', {
            url: "/demos/watcher",
            templateUrl: "src/demos/watcher/watcher.html"
        });
    });
})();
