angular.module('whatWorks', [
  'ui.router',
  'templates',
  'restangular',
])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'conditions.html',
            controller: 'conditionListCtrl'
        });
    // default fall back route
    $urlRouterProvider.otherwise('/');
  }
]);


angular.module('whatWorks').config(function(RestangularProvider) {
   RestangularProvider.setBaseUrl('http://localhost:3000/api');
   RestangularProvider.setRequestSuffix('.json');
});
