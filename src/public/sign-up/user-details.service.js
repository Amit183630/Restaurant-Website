(function () {
  "use strict";
  angular.module('public')
  .service('UserDetailsService',UserDetailsService);
  function UserDetailsService() {
    var service=this;
    var user={};
    user.saved=false;
    service.insertDetail=function (fname,lname,phone,email,menu) {
        user.fname=fname;
        user.lname=lname;
        user.phone=phone;
        user.email=email;
        user.menu=menu;
        user.saved=true;
    }
    service.getDetails=function () {
      return user;
    }
  }
})();
