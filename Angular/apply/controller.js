angular.module('mainModule', [])
	.controller('FirstController', ['$scope', function (s) {
		s.nombre="Jorge";
		setTimeout(function() {
			s.$apply(function (argument) {
				s.nombre="Enrique";
				console.log(s.nombre);
			});
		}, 2000);
		/*document.querySelector("#mi_boton").addEventListener("click",function (){
			s.$apply(function (argument) {
				s.nombre="Enrique";
			});
		});*/
	}]); 