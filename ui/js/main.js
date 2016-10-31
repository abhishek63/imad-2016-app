
//create AngularJS function angular.module
var app = angular.module('ImadBlog', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Homepage of the blog 
    .when("/", {templateUrl: "include/home.html", controller: "PageCtrl"})
    
}]);

