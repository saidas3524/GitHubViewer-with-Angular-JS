(function(){
	var app = angular.module("githubviewer",["ngRoute"]);
	app.config(function($routeProvider)
	{
		$routeProvider.when('/main',{
			templateUrl:'main.html',
			controller:'MainController'
		})
		.when('/user/:username',{
			templateUrl:'/user.html',
			controller:'UserController'
		})
		.when("/repos/:username/:repo",{
			templateUrl:'/repo.html',
			controller:'RepoController'
		})
		.otherwise({redirectTo:'/main'});

	});



}());