'use strict';

angular.module('VM_Mobile2', ['ngRoute'])
  .controller('MapCtrl', function($scope, $http) {
	      $http.get('http://120.151.95.114:8080/GPSServices.svc/GetTrackerDevCrossTable'). //http://rest-service.guides.spring.io/greeting
              success(function(data) {
                 $scope.DevInfos = data;
                 console.log("normal request information:", data);
              }); 
});
