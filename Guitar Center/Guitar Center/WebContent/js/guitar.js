App.controller('guitar_ctrl',function($scope, $location,$http,sharedObject){
			
			$scope.guitar_data =[];
			//got json and stored in scope variable
			$http.get('json/guitardata.json')
				.success(function(resp){
				$scope.guitar_data = resp.allProducts; 

			});
			$scope.abc = "guitar1.jpg";
			$scope.ind = 0;
			$scope.changePic = function(direc){
				if(direc==-1){
			 		$scope.ind = ($scope.ind==0)?$scope.guitar_data.length-1:$scope.ind-1;
			 		$scope.abc = $scope.guitar_data[$scope.ind].image_path;
			 		
			 	}else{

			 		$scope.ind = ($scope.ind<$scope.guitar_data.length-1)?$scope.ind+1:0;
			 		$scope.abc = $scope.guitar_data[$scope.ind].image_path;
			 	}
			 }	
			 $scope.get_buy = function(){
			 	sharedObject.shared_guitar = $scope.guitar_data[$scope.ind]; 
			 	//giving data in shared variable of service from local variable for currently selected guitar only
				$location.path('/order_purchase');
			}
			$scope.prod = false; 
			$scope.ship = false; 
			$scope.cust_rev = false; 
			$scope.prod_info = function(){
				if ($scope.prod == true) 
				{	
					$scope.prod=false;
				}
				else
				{	
					$scope.prod = true;
				}
			};
			$scope.ship_info = function(){
				if ($scope.ship == true) 
				{	
					$scope.ship=false;
				}
				else
				{	
					$scope.ship = true;
				}
			};
			$scope.cust_review = function(){
				if ($scope.cust_rev == true) 
				{	
					$scope.cust_rev=false;
				}
				else
				{	
					$scope.cust_rev = true;
				}
			};


});