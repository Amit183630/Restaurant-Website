(function () {
  "use strict";
  angular.module('public')
  .controller('InfoController',InfoController);
  InfoController.$inject=['UserDetailsService','MenuService'];
  function InfoController(UserDetailsService,MenuService) {
    var infCtrl=this;
    infCtrl.item={};
    infCtrl.user={};
    infCtrl.isSignedUp=UserDetailsService.getDetails().saved;
    if(infCtrl.isSignedUp){
      infCtrl.user=UserDetailsService.getDetails();
      infCtrl.item=infCtrl.user.fav;
    }
  }
})();
