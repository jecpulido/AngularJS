angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope,$http){
		$scope.posts=[];
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function callback(response){
			console.log(response);
			$scope.posts=response.data;
		})
		.catch(function(fallback){
			console.log(fallback);
		});
	});