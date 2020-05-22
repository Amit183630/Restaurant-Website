(function () {
  "use strict";
  angular.module('public')
  .controller('SignupController',SignupController);
  SignupController.$inject=['UserDetailsService','MenuService'];
  function SignupController(UserDetailsService,MenuService) {
    var $ctrl=this;
    $ctrl.saved=false;
    $ctrl.user={};
    $ctrl.user.fname="";
    $ctrl.user.lname="";
    $ctrl.user.phone="";
    $ctrl.user.email="";
    $ctrl.user.menu="";
    $ctrl.signup=function() {
      UserDetailsService.insertDetail($ctrl.user.fname,$ctrl.user.lname,$ctrl.user.phone,$ctrl.user.email,$ctrl.user.menu);
      $ctrl.saved=UserDetailsService.getDetails().saved;
    }
  }
})();
