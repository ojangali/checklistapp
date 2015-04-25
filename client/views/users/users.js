'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', function($scope, User, $state){
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    if($scope.name === 'register'){
      User.register(user)
      .then(function(){
        $state.go('login');
      })
      .catch(function(err){
        console.error(err);
      });
    }else{
      User.login(user)
      .catch(function(err){
        console.error(err);
      });
    }
  };
}]);
