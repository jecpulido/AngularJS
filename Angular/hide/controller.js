angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope,$http){
		$scope.posts=[];
		$scope.loading = true;
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function callback(response){
			console.log(response);
			$scope.posts=response.data;
			$scope.loading = false;
		})
		.catch(function(fallback){
			$scope.loading = false;	
		});

	});