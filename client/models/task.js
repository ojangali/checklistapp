'use strict';

angular.module('checklist')
.factory('Task', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){
  var fbTasks;
  var afTasks;



   function init(){
     fbTasks = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/tasks');
     afTasks = $firebaseArray(fbTasks);
     return afTasks;
   }

   function save(task){
    return afTasks.$save(task);

  }

   function add(task){
    return afTasks.$add(task);
  }
   function destroy(task){
    return afTasks.$remove(task);
  }

  return {add: add, init: init, destroy: destroy, save:save};
}]);
