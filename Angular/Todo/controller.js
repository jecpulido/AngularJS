angular.module('ToDoList', ["LocalStorageModule"])
.controller('ToDoController', ['$scope','localStorageService', function (s,lss) {
	if (lss.get("angular-todolist")) {
		s.todo = lss.get("angular-todolist");	
	}else{
		s.todo =[];		
	};
	
	s.$watchCollection('todo', function(newValue,oldValue){
		lss.set('angular-todolist',s.todo);
	});

	s.addAct = function(){
		s.todo.push(s.newAct);
		s.newAct = {};
	}
	s.claenAct = function(){
		s.todo =[];		
	}
}]);