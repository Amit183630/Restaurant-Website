(function () {
  "use strict";
  angular.module('public')
  .controller('InfoController',InfoController);
  InfoController.$inject=['UserDetailsService','MenuService'];
  function InfoController(UserDetailsService,MenuService) {
    var infCtrl=this;
    infCtrl.isSignedUp=UserDetailsService.getDetails().saved;
    if(infCtrl.isSignedUp){
      infCtrl.user=UserDetailsService.getDetails();
      var promise=MenuService.getMenuItems(infCtrl.user.menu);
      promise.then(function(response) {
        infCtrl.items=response.menu_items;
        
      })

    }
  }
})();
