/// <reference path="../typings/index.d.ts" />
angular
    .module('app')
    .config(routesConfig);
/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
        url: '/',
        template: '<app></app>'
    });
}
//# sourceMappingURL=routes.js.map