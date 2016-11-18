//create AngularJS function angular.module
var app = angular.module('ImadBlog', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Homepage of the blog 
    .when("/", {templateUrl: "include/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "ui/include/about.html", controller: "PageCtrl"})
    .when("/login", {templateUrl: "ui/include/login.html", controller: "PageCtrl"})
    .when("/home", {templateUrl: "ui/include/home.html", controller: "PageCtrl"})
    .when("/register", {templateUrl: "ui/include/register.html", controller: "PageCtrl"})
}]);
//create AngularJS function angular.module
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

