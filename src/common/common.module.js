(function () {
  "use strict";
  angular.module('common',[])
  .config(config)
  .constant("ApiPath","https://gupta00restaurant.herokuapp.com");
  config.$inject=['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
