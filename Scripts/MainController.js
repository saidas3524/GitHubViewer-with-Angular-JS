var app = angular.module("githubviewer");
var MainController = function($scope,$interval,$location){
	
	$scope.Countdown = 5;
	
	$scope.search = function(){
		if(jitter)
		{
			$interval.cancel(jitter);
			

		}
		debugger;
		$scope.Countdown=null;

		$location.path("/user/"+$scope.username);
		

	};
	

	var jitter =null;
	var startCountdown = function(){

		jitter=$interval(decrementcounter,1000,$scope.Countdown);
		
	}
	var decrementcounter = function(){
		$scope.Countdown -=1;
		if($scope.Countdown <1)
		{
			$scope.search();
			$scope.Countdown=null;

		}

		};

		startCountdown();			

};
app.controller("MainController",MainController);
