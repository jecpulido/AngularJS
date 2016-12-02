angular.module('ToDoList', ["LocalStorageModule"])
	.factory('ToDoService', [function (localStorageService) {
		var toDoService = {};
		toDoService.key = "angular-todolist";

		if (localStorageService.getItem(toDoService.key)) {
			toDoService.activities = localStorageService.get(toDoService.key);	
		}else{
			toDoService.activities =[];
		};
		toDoService.add = function (newActv){
			toDoService.activities.push(newActv);
			toDoService.updaLocalStorage();
		};
		toDoService.updaLocalStorage = function () {
			localStorageService.set(toDoService.key,toDoService.activities)
		};
		toDoService.clean = function () {
			toDoService.activities = [];
			toDoService.updaLocalStorage();	
			return toDoService.getAll();
		};
		toDoService.getAll = function () {
			return toDoService.activities;
		};
		toDoService.removeItem = function (item) {
			toDoService.activities = toDoService.activities.filter(function(activity) {
				return activity != item;
			});
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		}
		return toDoService();
	}])
	.controller('ToDoController', ['$scope','ToDoService', function (s,ts) {
	
		s.todo = ts.getAll();
		s.newActv={};
		s.addActv = function () {
			ts.add(s.newActv);
			s.newActv={};
		}
		s.removeActv = function (item) {
			s.todo = ts.removeItem(Item);
		}
		s.clearActv = function () {
			s.todo = ts.clean();
		}
	
	}]);