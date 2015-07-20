(function() {
    var module = angular.module('app');

    module.controller('renderDemoController', ['$scope', function($scope) {
        var container = $('.render-container');
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
            container.empty();

            runCallbackAndOutputTime('time1', function() {
                for (var i = 0; i < number; i++) {
                    container.append(buildButton(i));
                    updateButton(i, getPosition(i));
                }
            });
        };

        $scope.start2 = function() {
            container.empty();

            runCallbackAndOutputTime('time2', function() {
                for (var i = 0; i < number; i++) {
                    var appendEle = container.append(buildButton(i));
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


        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }]);
    module.controller('directiveDemoController', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.array1 = [];
        $scope.array2 = [];
        $scope.clear = function() {
            $scope.array1 = [];
            $scope.array2 = [];
        };

        var number = 5000;
        $scope.create1 = function() {
            $scope.clear();
            $timeout(function() {
                for (var i = 0; i < number; i++) {
                    $scope.array1.push(i);
                }
            });
        };

        $scope.create2 = function() {
            $scope.clear();
            $timeout(function() {
                for (var i = 0; i < number; i++) {
                    $scope.array2.push(i);
                }
            });
        };


        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }]);
    module.directive('buttonNormal', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<button style="width:100px;height:100px;margin:8px">{{name}}<br/> X:{{x}}<br/> Y:{{y}}</button>',
            link: function(scope, element, attr) {
                scope.name = 'button' + scope.$eval(attr.index);
                var position = element.position();
                scope.x = Math.ceil(position.left);
                scope.y = Math.ceil(position.top);
            }
        };
    });
    module.directive('buttonAsync', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<button style="width:100px;height:100px;margin:8px">{{name}}<br/> X:{{x}}<br/> Y:{{y}}</button>',
            link: function(scope, element, attr) {
                scope.name = 'button' + scope.$eval(attr.index);

                scope.$evalAsync(function() {
                    var position = element.position();
                    scope.x = Math.ceil(position.left);
                    scope.y = Math.ceil(position.top);
                });

            }
        };
    });
    module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('render', {
            url: '/demos/render',
            templateUrl: 'src/demos/render/render.html'
        }).state('render.demoJquery', {
            url: '/demos/render/demoJquery',
            templateUrl: 'src/demos/render/demoJquery.html'
        }).state('render.demoAngular', {
            url: '/demos/render/demoAngular',
            templateUrl: 'src/demos/render/demoAngular.html'
        });

    });
})();
