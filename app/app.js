angular.module('testApp', [])
.controller('testController', function($scope) {
})
.directive('itemCount', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'templates/count.html',
        link: function(scope, element, attr) {

            scope.dec = function (){
                if (scope.count <= 1) return;
                scope.count--;
            };

            scope.inc = function() {
                if (scope.count >= 10) return;
                scope.count++;
            };

            if(attr.count){
                scope.count = attr.count;
            }else{
                scope.count = 1;
            }
        }
    };
});
