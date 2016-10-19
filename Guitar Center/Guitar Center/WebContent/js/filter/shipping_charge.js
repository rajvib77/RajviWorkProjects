App.filter('shipping_charge',function(){
	return function(input){
		var price =  input.split("$");
		return price[1];
		}
	});