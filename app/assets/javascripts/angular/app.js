angular.module('whatWorks', [
  'ui.router',
  'templates',
])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    /**
     * Routes and States
     */
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'conditions.html',
            controller: 'ConditionListCtrl'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
  }
]);