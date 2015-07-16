(function() {
    var module = angular.module('app');
    module.controller('renderDemoController', ['$scope', function($scope) {
        var ele = $('.render-container');
        var number = 5000;

        function runCallbackAndOutputTime(name, callback) {
            var startTime = new Date();
            callback();
            var seconds = ((new Date()).getTime() - startTime.getTime()) / 1000;
            $scope[name] = seconds + '秒';
        }

        function buildButton(i) {
            return '<button style="width:100px;height:100px;margin:8px" id="button' + i + '"></button>';
        }

        function updateButton(i, position) {
            var x = Math.ceil(position.left);
            var y = Math.ceil(position.top);
            $('#button' + i).html('button' + i + '<br/>x:' + x + '<br/>y: ' + y + '<br/>');
        }

        function getPosition(i) {
            return $('#button' + i).position();
        }

        $scope.start = function() {
            ele.empty();

            runCallbackAndOutputTime('time1', function() {
                for (var i = 0; i < number; i++) {
                    ele.append(buildButton(i));
                    updateButton(i, getPosition(i));
                }
            });
        };

        $scope.start2 = function() {
            ele.empty();

            runCallbackAndOutputTime('time2', function() {
                for (var i = 0; i < number; i++) {
                    var appendEle = ele.append(buildButton(i));
                }

                var positions = [];
                for (i = 0; i < number; i++) {
                    positions.push($('#button' + i).position());
                }

                for (i = 0; i < number; i++) {
                    updateButton(i, positions[i]);
                }
            });
        };
    }]);

    module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('render', {
            url: '/demos/render',
            templateUrl: 'src/demos/render/render.html'
        }).state('render.desc', {
            url: '/demos/render/desc',
            templateUrl: 'src/demos/render/desc.html'
        }).state('render.demo', {
            url: '/demos/render/demo',
            templateUrl: 'src/demos/render/demo.html'
        }).state('render.code1', {
            url: '/demos/render/code1',
            templateUrl: 'src/demos/render/code1.html'
        }).state('render.code2', {
            url: '/demos/render/code2',
            templateUrl: 'src/demos/render/code2.html'
        });

    });
})();
