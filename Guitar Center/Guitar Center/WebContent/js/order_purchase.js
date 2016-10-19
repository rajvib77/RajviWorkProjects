App.controller('order_purchase_ctrl',function($scope, $location, sharedObject){

	$scope.guitar_object = sharedObject.shared_guitar; //getting all shared data of service variable into local page variable. On page will use local variable to access data

	$scope.fname = "";
	$scope.lname = "";
	$scope.email = "";
	$scope.contact = "";
	$scope.addr = "";

	$scope.prev = false;

	$scope.preview = function(){
		if ($scope.prev == true){	
			$scope.prev=false;
		}
		else
		{	
			$scope.prev = true;
		}
		};
	$scope.buy_guitar = function(){
	sharedObject.shared_guitar_payment = [$scope.fname,$scope.lname,$scope.email,$scope.contact,$scope.addr];
	$location.path('/confirmation');
	}

});