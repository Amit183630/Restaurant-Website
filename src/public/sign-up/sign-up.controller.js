(function () {
  "use strict";
  angular.module('public')
  .controller('SignupController',SignupController);
  SignupController.$inject=['UserDetailsService','MenuService','$scope'];
  function SignupController(UserDetailsService,MenuService,$scope) {
    var $ctrl=this;
    $ctrl.saved=false;
    $ctrl.user={};
    $ctrl.user.fname="";
    $ctrl.user.lname="";
    $ctrl.user.phone="";
    $ctrl.user.email="";
    $ctrl.user.menu="";
    $ctrl.user.fav={};
    $ctrl.msg="";
    $ctrl.signup=function() {
      var items;
      //$ctrl.user=UserDetailsService.getDetails();
      var promise=MenuService.getMenuItems();
      promise.then(function(response) {
        items=response.menu_items;
        for(var item in items){
          if(items[item].short_name===$ctrl.user.menu){
            $ctrl.user.fav=items[item];
              $ctrl.saved=true;
            UserDetailsService.insertDetail($ctrl.user.fname,$ctrl.user.lname,$ctrl.user.phone,
              $ctrl.user.email,$ctrl.user.menu,$ctrl.user.fav);
              break;
          }
        }
        if($ctrl.saved) $ctrl.msg="Your information has been saved";
        else $ctrl.msg="No such menu exists";
      });
    }
  }
})();
