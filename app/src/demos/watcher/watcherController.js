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
        $scope.addOnceWidget = function() {
            $scope.onceWidgets = $scope.onceWidgets || [];
            $scope.onceWidgets.push({});
        };
    }]);

    module.controller('ngWidgetController', ['$scope', function($scope) {
        var items = $scope.items = [];

        $scope.dial = function(number) {
            var i = 1000;
            while (i-- > 0) {}
            // console.log('拨打电话：' + number);
            return i;
        };

        function getRandomPhone() {
            var phone = '';
            for (var i = 0; i < 11; i++) {
                phone += Math.floor(Math.random() * 10);
            }
            return phone;
        }
        for (var i = 0; i < 200; i++) {
            var item = {};
            item.name = 'name' + i;
            item.isMale = Math.random() > 0.4;
            item.age = Math.round(Math.random() * 20 + 15);
            item.homePhone = getRandomPhone();
            item.phone = getRandomPhone();
            item.address = 'address_1_' + i;
            item.account = Math.round(Math.random() * 400000);
            item.email = getRandomPhone() + '@360.cn';
            items.push(item);
        }
    }]);

    module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('watcher', {
            url: "/demos/watcher",
            templateUrl: "src/demos/watcher/watcher.html"
        }).state('watcher.demo', {
            url: "/demos/watcher/demo",
            templateUrl: "src/demos/watcher/demo.html"
        }).state('watcher.summary', {
            url: "/demos/watcher/summary",
            templateUrl: "src/demos/watcher/summary.html"
        });
    });
})();
