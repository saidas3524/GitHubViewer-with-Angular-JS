(function(){
var app = angular.module("githubviewer");
var UserController = function($scope,github,$routeParams){
	
	
	var onSuccess = function(data){
		$scope.userdata =data;
		github.getrepo($scope.userdata).then(onSuccessRepo,onError);
	};
	var onSuccessRepo = function(data){
		$scope.repodata = data;

	};
	var onError= function(reason){
		alert("error in code");
	};
	$scope.username = $routeParams.username;
	$scope.repoSortOrder = '+name';
	github.getuser($scope.username).then(onSuccess,onError);


};
app.controller("UserController",UserController);
}());
