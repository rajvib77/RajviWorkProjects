var App = angular.module('guitar_center',['ngRoute']);
		
	App.config(function($routeProvider){
		$routeProvider.when('/guitar', {
			templateUrl: 'guitar.html',
			controller: 'guitar_ctrl'
		}).when('/order_purchase',{
			templateUrl: 'order_purchase.html',
			controller: 'order_purchase_ctrl'
		}).when('/confirmation',{
			templateUrl: 'confirmation.html',
			controller: 'confirmation_ctrl'
		}).otherwise({redirectTo:'/guitar'});
	});

	