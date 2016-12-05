angular.module('ToDoList', ["LocalStorageModule"])
	.service('ToDoService', function(localStorageService){
		this.key = "angular-todolist";

		if (localStorageService.get(this.key)) {
			this.activities = localStorageService.get(this.key);	
		}else{
			this.activities =[];
		};
		this.add = function (newActv){
			this.activities.push(newActv);
			this.updaLocalStorage();
		};
		this.updaLocalStorage = function () {
			localStorageService.set(this.key,this.activities)
		};
		this.clean = function () {
			this.activities = [];
			this.updaLocalStorage();	
			return this.getAll();
		};
		this.getAll = function () {
			return this.activities;
		};
		this.removeItem = function (item) {
			this.activities = this.activities.filter(function(activity) {
				return activity != item;
			});
			this.updaLocalStorage();
			return this.getAll();
		}
	})
	.controller('ToDoController', ['$scope','ToDoService', function (s,ts) {
	
		s.todo = ts.getAll();
		s.newActv={};
		s.addActv = function () {
			ts.add(s.newActv);
			s.newActv={};
		}
		s.removeActv = function (item) {
			s.todo = ts.removeItem(item);
		}
		s.cleanActv = function () {
			s.todo = ts.clean();
		}
	
	}]);