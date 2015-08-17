(function(){
	var github = function($http){

		var getuser = function(username){
			return $http.get("https://api.github.com/users/"+username).then(function(response){
				return response.data;

			});
		};
		
		var getrepo = function(user){
			return $http.get(user.repos_url).then(function(response){
 				return response.data;
 			});
		};


		var getissuecount = function(username,repo){
				return  $http.get("https://api.github.com/repos/"+username+"/"+repo).then(function(response){
					return response.data;
				});

		}

		var getcontributors = function(username,repo){
				return  $http.get("https://api.github.com/repos/"+username+"/"+repo+"/contributors").then(function(response){
					return response.data;
				});

		}

		return{
			getuser:getuser,
			getrepo:getrepo,
			getissuecount:getissuecount,
			getcontributors:getcontributors
		};



	};


	var app = angular.module("githubviewer");
	app.factory("github",github);
}());