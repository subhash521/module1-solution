(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheck);

LunchCheck.$inject=['$scope'];
function LunchCheck($scope){
  $scope.message="";

  $scope.status=function (){
    var inputString=$scope.name;
    console.log(inputString);
    if (inputString==undefined){
      $scope.message="Please enter first data";
    }else{
   var arrayOfString= inputString.split(",");
   for(var i=0; i<arrayOfString.length;i++){
     if (arrayOfString[i]==""){
       arrayOfString.splice(i);

     }
   }
  // console.log(arrayOfString.length);
   if (arrayOfString.length<=3){
  $scope.message="Enjoy!";
   }
   else{
     $scope.message="Too much!";
   }
}
  };

};

})();
