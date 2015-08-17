(function(){
var app = angular.module("githubviewer");
var RepoController = function($scope,github,$routeParams){
	
	
	var onSuccess = function(data){
		$scope.issuecount =data.open_issues_count;
		github.getcontributors($scope.username,$scope.repo).then(onSuccessRepo,onError);
	};
	var onSuccessRepo = function(data){
		$scope.contributors = data;

	};
	var onError= function(reason){
		alert("error in code");
	};
	$scope.username = $routeParams.username;
	$scope.repo = $routeParams.repo;
	
	$scope.repoSortOrder = '+name';
	github.getissuecount($scope.username,$scope.repo).then(onSuccess,onError);


};
app.controller("RepoController",RepoController);
}());
