angular.module("CustomDirective", [])
.directive('myAutocomplete', function(){
	return {
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
})
.directive('backImg', function(){
	return {		
		link: function($scope, iElm, iAttrs, controller) {
			iAttrs.$observe('backImg',function(value){
				iElm.css({
					"background": "url("+value+")",
					"background-size": "cover",
					"background-position":"center"
				});
			})
		}
	};
})
.controller('AppCtrl', ['$scope','$http', function (s,h) {
	h({method:'GET',url :'https://api.github.com/users/codigofacilito/repos'
	})
	.then(function successCallback(response) {
		s.repos = response.data;
		//console.log(s.repos.data);
	},function errorCallback(error) {
		console.log(error);
	});

}]);