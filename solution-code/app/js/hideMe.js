angular.module('FlashCards', ['ngAnimate'])
.directive("hideMe", ['ngAnimate', function($animate){
    return function(scope, element, attrs){
            scope.$watch(attrs.hideMe, function(){
                if(attrs.hideMe){
                   $animate.removeClass(element, "hidden");
                } else {
                   $animate.addClass(element, "hidden");
                }
        });
    };
}]);