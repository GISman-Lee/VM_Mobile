'use strict';

angular.module('VM_Mobile2', ['ngRoute'])
.controller('MapCtrl', function($scope, $http) {
      $http.get('http://120.151.95.114:8080/Projects/Services/GPSServices.svc/GetTrackerDevCrossTable'). //http://rest-service.guides.spring.io/greeting //http://120.151.95.114:8080/Projects/Services/GPSServices.svc/GetTrackerDevCrossTable  //http://120.151.95.114:8080/GPSServices.svc/GetTrackerDevCrossTable
      success(function (data) {
       $scope.DevInfos = data.sort(compare);
       console.log("normal request information:", data);
     });
    });

function compare(a, b) {
 if (a.Id > b.Id) return 1;
 if (a.Id < b.Id) return -1;
}
