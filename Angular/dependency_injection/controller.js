angular.module("MyFirstApp", [])
	.controller("FirstController",["$scope", function(m){
		m.nombre="Jorge";
		m.nuevoComentario = {};
		m.comentarios=[
			{
				comentario:"Buen trabajo",
				username:"Jorge.pulido"
			},
			{
				comentario:"Sigue trabajando",
				username:"Cristian.puto"
			}
		];
		m.agregarComentario = function(){
			m.comentarios.push(m.nuevoComentario);
			m.nuevoComentario = {};
		}
	}]);
