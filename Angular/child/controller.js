angular.module('MyFirstApp', [])
	.run(['$rootScope', function(rs) {
		rs.nombre="Manuel Pulido";
	}])
	.controller('FirstController', ['$scope', function (s) {
		s.nombre="Jorge Pulido";
		setTimeout(function () {
			s.$apply(function () {
				s.nombre = "Alejandro Gonzalez";
				//console.log(s.nombre);
			});
		},1000);
	}])
	.controller('ChildController', ['$scope', function (cs) {
		
	}])