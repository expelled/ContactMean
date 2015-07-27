function AppController($scope,$http){
	
	var refresh = function(){
		console.log('Hello from controllers')
		$http.get('/contactlist').success(function(respone){
			console.log('hello i am success from contactlist')
			$scope.contactlist = respone;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).success(function(respone){
			console.log(respone);
			refresh();
		});
	};

	$scope.updateContact = function(){
		console.log("Update id,"+ $scope.contact._id);
		$http.put('/contactlist/'+ $scope.contact._id,$scope.contact).success(function(respone){
			console.log(respone);
			refresh();
		});
	};

	$scope.edit = function(id){
		console.log("id Update ,"+id);
		$http.get('/contactlist/'+id).success(function(respone){
			console.log(respone);
			$scope.contact = respone;			
		});
	};	

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/'+id).success(function(respone){
			console.log(respone);
			refresh();
		});
	};	

}