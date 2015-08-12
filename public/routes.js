angular.module('milestone').config(function($routeProvider){
  $routeProvider
    .when('/', {
    	redirectTo:'/timeline'
    })
});
