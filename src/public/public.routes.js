(function() {
  "use strict";
  angular.module('public')
  .config(routeConfig);

  routeConfig.$inject=['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider.
    state('public',{
      abstract:true,
      templateUrl:'src/public/public.html'
    })
    .state('public.home',{
      url:'/',
      templateUrl:'src/public/home/home.html'
    })
    .state('public.menu',{
      url:'/menu',
      templateUrl:'src/public/menu/menu.html'
    });
  }
})();