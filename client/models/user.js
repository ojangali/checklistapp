'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', function($rootScope){

  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }

  function login(user){
    return $rootScope.afAuth.$authWithPassword(user);
  }

  function logout(){
    return $rootScope.afAuth.$unauth();
  }

  return {register: register, login: login, logout: logout};
}]);
