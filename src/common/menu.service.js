(function () {
  "use strict";
  angular.module('common')
  .service('MenuService',MenuService);
  MenuService.$inject=['$http','ApiPath']
  function MenuService($http,ApiPath) {
    var serice=this;
    this.getCategories=function () {
      return $http.get(ApiPath+"/categories.json").then(function (response) {
        return response.data;
      });
    }
  }
})();
