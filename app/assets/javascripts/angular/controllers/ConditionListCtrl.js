angular.module('whatWorks')
  .controller('ConditionListCtrl', ['$scope', function ($scope) {
    console.log('im in the controller');
    $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
  }]);