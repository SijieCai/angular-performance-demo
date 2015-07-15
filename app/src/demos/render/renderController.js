(function() {
    var module = angular.module('app');
    module.controller('renderController', ['$scope', function($scope) {
        var ele = $('.render-container');
        var number = 10000;
        $scope.start = function() {

            ele.empty();
            console.log('开始1:' + new Date());
            for (var i = 0; i < number; i++) {
                var appendEle = ele.append('<button style="width:100px;height:100px;margin:8px" id="button' + i + '" class="my-flex-item"></button>');
                var position = $('#button' + i).position();

                var x = Math.floor(position.left);
                var y = Math.floor(position.top);
                $('#button' + i).html('button<br/>x:' + x + '<br/>y: ' + y + '<br/>');
            }

            console.log('完成1:' + new Date());
        };

        $scope.start2 = function() {

            ele.empty();

            console.log('开始2:' + new Date());
            for (var i = 0; i < number; i++) {
                var appendEle = ele.append('<button style="width:100px;height:100px;margin:8px" id="button' + i + '" class="my-flex-item">abc <br/> Coords: x , y <br/></button>');
            }

            var cors = [];
            for (i = 0; i < number; i++) {
                var position = $('#button' + i).position();

                var x = Math.floor(position.left);
                var y = Math.floor(position.top);
                cors.push({
                    x: x,
                    y: y
                });
            }
            for (i = 0; i < number; i++) {
                $('#button' + i).html('button<br/>x: ' + cors[i].x + '<br/>y:' + cors[i].y + '<br/>');
            }

            console.log('开始2:' + new Date());
        };
    }]);

    module.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('render', {
            url: "/demos/render",
            templateUrl: "src/demos/render/render.html"
        });

    });
})();
