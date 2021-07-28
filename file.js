jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX -7;
    mouseY = e.pageY -7; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});

const btnriple = document.querySelector(".btnriple");
btnriple.onmousemove = function (e) {
  var x = e.pageX - btnriple.offsetLeft;
  var y = e.pageY - btnriple.offsetTop;
  btnriple.style.setProperty("--x", x + "px");
  btnriple.style.setProperty("--y", y + "px");
};
const btnriple2 = document.querySelector(".btnriple2");
btnriple2.onmousemove = function (e) {
  var x = e.pageX - btnriple2.offsetLeft;
  var y = e.pageY - btnriple2.offsetTop;
  btnriple2.style.setProperty("--x", x + "px");
  btnriple2.style.setProperty("--y", y + "px");
};


var app = angular.module("myPort", []);
app.controller("myPortController", function ($scope, $http) {
  $scope.cityData1 = [];
  $scope.cityData2 = [];
  $scope.cityData3 = [];

  $scope.getCityWheather = function () {
    var url1 =
      "https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric";
    var url2 =
      "https://api.openweathermap.org/data/2.5/weather?lat=19.228825&lon=72.854118&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric";
    var url3 =
      "https://api.openweathermap.org/data/2.5/weather?lat=15.3173&lon=75.7139&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric";
    $http.get(url1).then(
      // Success
      function (response) {
        $scope.cityData1 = response.data;
      },
      // Error
      function (response) {
        alert("Delhi weather API failed to load. Please try again later.");
      }
    );
    $http.get(url2).then(
      // Success
      function (response) {
        $scope.cityData2 = response.data;
      },
      // Error
      function (response) {
        alert("Mumbai weather API failed to load. Please try again later.");
      }
    );
    $http.get(url3).then(
      // Success
      function (response) {
        $scope.cityData3 = response.data;
      },
      // Error
      function (response) {
        alert("Karnataka weather API failed to load. Please try again later.");
      }
    );
  };
  $scope.getCityWheather();

  $scope.NasaData = [];
  $scope.Nasa = function () {
    var nasaUrl =
      "https://api.nasa.gov/planetary/apod?api_key=tMJEeR2HAmVDLnHIx85HheQGsf4kdwsk6ksc5B2s";
    $http.get(nasaUrl).then(
      // Success
      function (response) {
        //console.log(response);
        $scope.NasaData = response.data;
      },
      // Error
      function (response) {
        console.log(response);
        alert("Nasa Api failed!..");
      }
    );
  };
  $scope.Nasa();
});
