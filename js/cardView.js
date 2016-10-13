angular.module('FlashCards')
.directive('card', function cardView(){
    return { 
        restrict: 'E',
        templateUrl: 'cardView.html',
        scope: {
            question: '@',
            answer: '@',
            answerHidden: '@',
            'hideMe':'&hideMe'
        }
    };
});