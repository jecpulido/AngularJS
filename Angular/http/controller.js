angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope,$http){
		$scope.posts=[];
		$scope.newPost={};
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function callback(response){
			console.log(response);
			$scope.posts=response.data;
		})
		.catch(function(fallback){
			
		});
		$scope.addPost = function(){
			$http.post("http://jsonplaceholder.typicode.com/posts",{
				title:  $scope.newPost.title,
				body:   $scope.newPost.body,
				userId: 1
			})
			.then(function(data,status,headers,config){
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};
			})
			.catch(function(error,status,headers,config){
				console.log(error);
			});
		}
	});