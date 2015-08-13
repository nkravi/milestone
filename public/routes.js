angular.module('milestone').config(function($routeProvider){
  $routeProvider
    .when('/', {
    	redirectTo:'/milestone'
    })
    .when('/milestone',{
    	templateUrl: "templates/show_milestone.html",
    	controller:"showMileStoneCntrl"
    })
});
