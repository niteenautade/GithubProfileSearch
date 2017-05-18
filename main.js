var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    $scope.clientId= '60b9f23dedffbdfc476c';
	$scope.clientSecret= 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

	$scope.pressed = function(){
		$scope.link = "https://api.github.com/users/"+$scope.gitSearchTxt+'/repos?client_id='+$scope.clientId+'&client_secret='+$scope.clientSecret;
		console.log($scope.link);
		$scope.reposData = [];
		$http.get($scope.link)
		    .then(function(response) {
		        $scope.reposData.push(response.data);
		 });
	}
	
	
});



