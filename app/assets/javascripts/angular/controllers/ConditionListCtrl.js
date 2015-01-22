angular.module('whatWorks')
  .controller('conditionListCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    Restangular.all('conditions').getList().then(function(conditions){
      $scope.things = conditions;
    });
  }]);