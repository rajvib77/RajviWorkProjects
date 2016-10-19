App.controller('confirmation_ctrl',function($scope, $location, sharedObject){
	$scope.get_guitar_pay_info = sharedObject.shared_guitar_payment; //service from order_purchase page
	$scope.get_guitar_info = sharedObject.shared_guitar; //service from guitar page for image of guitar
	
	//localStorage.clear();
	$scope.order_no = 1; // this logic is for order no. it will create local storage on browser. 
		if(localStorage.order_no !=undefined){
			$scope.order_no=localStorage.order_no;
		}

	//to get final price by adding price and shipping price
	$scope.ship = $scope.get_guitar_info.shipping_details.split("$");
	$scope.final_price = $scope.get_guitar_info.price + parseInt($scope.ship[1]);
	



	$scope.home = function(){
		//$scope.order_no = $scope.order_no + 1;
		localStorage.setItem('order_no',parseInt($scope.order_no)+1); //order no. will increment every time its stored on browser
		$location.path('/index');
	}


});
