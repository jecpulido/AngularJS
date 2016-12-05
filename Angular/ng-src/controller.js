angular.module("CustomDirective", [])
.controller('AppCtrl', ['$scope','$http', function (s,h) {
	h({method:'GET',url :'https://api.github.com/users/jecpulido/repos'
	})
	.then(function successCallback(response) {
		s.repos = response.data;
		//console.log(s.repos.data);
	},function errorCallback(error) {
		console.log(error);
	});

}]);