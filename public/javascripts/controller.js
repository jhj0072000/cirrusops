var cirrusOps = angular.module('cirrusOps',[]);

cirrusOps.controller('TestController', ['$scope', function($scope) {
	person1 = {
		name: 'tim',
		email: 'tim@gmail.com',
		number: '1'
	}
	person2 = {
		name: 'emily',
		email: 'emily@gmail.com',
		number: '2'
	}
	person3 = {
		name: 'john',
		email: 'john@gmail.com',
		number: '3'
	}

	var contactList = [person1, person2, person3];

	$scope.contactList = contactList;

}]);