angular.module('cthulhuApp', [])
	.controller('GenericController', ['$scope', function($scope) {
// TODO: should be a more delicate way tho...
	$scope.generic = {};

// console.log actual state of the `generic` model
// only here for demonstrational purposes
	$scope.onDebugger = function () {
		console.log(this.generic);
		//debugger;
	};
}]);