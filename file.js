

$(document).ready(function(){

})
  
var dark=0;
function toggleDarkMode() {
  const button = document.querySelector('#button');
  var element = document.body;
  element.classList.toggle("dark-mode");
  var h2tag = document.getElementsByTagName("h2");
  var h4tag = document.getElementsByTagName("h4");
  var worktag = document.getElementById("portfolio");
  var contact = document.getElementById("contact");
  var tech = document.getElementById("tech");
 // var bgrem = document.getElementById("bgrem");
  var paneltag = document.getElementById("panelbody1");
  var paneltag2 = document.getElementById("panelbody2");
  var paneltag3 = document.getElementById("panelbody3");
  var i;
  if(dark==0){
    for (i = 0; i < h2tag.length; i++) {
      h2tag[i].style.color = "#fff";     
      
    }
    for(i=0; i<h4tag.length;i++){
      h4tag[i].style.color = "#fff";
    }
    worktag.classList.remove("bg-grey");
    contact.classList.remove("bg-grey");
    tech.classList.remove("bg-info");
  //  bgrem.classList.remove("bg-info");
    paneltag.style.background = "#303030";
    paneltag2.style.background = "#303030";
    paneltag3.style.background = "#303030";
    button.innerHTML = '<i class="fa fa-sun fa-3x" style="color: #fff;" title="Toggle Light Mode"></i>';
    dark=1;
  }
  else if(dark===1){
    for (i = 0; i < h2tag.length; i++) {
      h2tag[i].style.color = "#303030";    
  }
  for(i=0; i<h4tag.length;i++){
    h4tag[i].style.color = "#303030";
  }
  button.innerHTML = '<i class="fa fa-moon fa-3x" style="color: #fff;" title="Toggle Dark Mode"></i>';
  worktag.classList.add("bg-grey");
  contact.classList.add("bg-grey");
  tech.classList.add("bg-info");
  paneltag.style.background="#fff";
  paneltag2.style.background="#fff";
  paneltag3.style.background="#fff";
  dark=0;
  }
}

var app = angular.module('myPort', []);     
app.controller('myPortController', function($scope,$http) {
  $scope.cityData1 =[];
  $scope.cityData2 =[];
  $scope.cityData3 =[];

  $scope.getCityWheather = function()
  {       
        
        var url1= 'https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric';
        var url2= 'https://api.openweathermap.org/data/2.5/weather?lat=19.228825&lon=72.854118&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric';
        var url3= 'https://api.openweathermap.org/data/2.5/weather?lat=15.3173&lon=75.7139&appid=ac595d4c5c413500f1d638d0a140f31b&units=metric';
          $http.get(url1).then(
                               // Success
                               function(response) {
                                       $scope.cityData1 = response.data;                                                                     
                               },
                               // Error
                               function(response) {
                                alert("Delhi weather API failed to load. Please try again later.");                                
                               });
          $http.get(url2).then(
                               // Success
                               function(response) {
                                       $scope.cityData2 = response.data;                                                                     
                               },
                               // Error
                               function(response) {
                                alert("Mumbai weather API failed to load. Please try again later.");                                
                               });
          $http.get(url3).then(
                               // Success
                               function(response) {
                                       $scope.cityData3 = response.data;                                                                     
                               },
                               // Error
                               function(response) {
                                alert("Karnataka weather API failed to load. Please try again later.");                                
                               });
       
            
  }
  $scope.getCityWheather();

  $scope.NasaData=[];
  $scope.Nasa = function(){
    var nasaUrl= "https://api.nasa.gov/planetary/apod?api_key=tMJEeR2HAmVDLnHIx85HheQGsf4kdwsk6ksc5B2s";
    $http.get(nasaUrl).then(
      // Success
      function(response) {
        //console.log(response);
        $scope.NasaData=response.data;
        
      },
      // Error
      function(response) {
        console.log(response);
        alert("Nasa Api failed!..");
      })
  }
  $scope.Nasa();
});
