angular.module('mainModule', [])
	.filter("removeHtml",function () {
		return function (texto) {
			return String(texto).replace(/<[^>]+>/gm,' ');
		}
	})
	.controller('FiltersController', ['$scope', function (s) {
		s.mi_html = "<p>Hola Mundo</p>";
		s.html = {};
		s.html.title="Hola";
		s.html.body="Hola Mundo";
		s.costo = 2;
	}])