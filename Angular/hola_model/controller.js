angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope){
		$scope.nombre="Jorge";
		$scope.nuevoComentario = {};
		$scope.comentarios=[
			{
				comentario:"Buen trabajo",
				username:"Jorge.pulido"
			},
			{
				comentario:"Sigue trabajando",
				username:"Cristian.puto"
			}
		];
		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}
	});