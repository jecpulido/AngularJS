angular.module('MyFirstApp', [])
	.run(['$rootScope', function(rs) {
		rs.nombre="Manuel Pulido";
		console.log(rs.nombre);
	}])
	.controller('FirstController', ['$scope', function (s) {
		s.nombre="Jorge Pulido";
	}])
	.controller('ChildController', ['$scope', function (cs) {
		
	}])