angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){


  var id = parseInt($stateParams.id)

  var packageInfo = mainService.packageInfo
  
  for (var i = 0; i < packageInfo.length; i++) {
    if (packageInfo[i].id === id) {
      $scope.foundCity = packageInfo[i].city
      $scope.foundCountry = packageInfo[i].country
    }
  }




});
