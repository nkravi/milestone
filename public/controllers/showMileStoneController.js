google.load("visualization", "1", {packages:["timeline"]});
/*
google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['milestone']);
});
*/
angular.module('milestone').controller('showMileStoneCntrl',function($scope,$location,$http){
	var container = document.getElementById('chartdiv');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Repo' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addColumn({ type: 'date', role: 'tooltip' });
    var options = {
    	//tooltip: {isHtml: true},
        legend: 'none'
  	};
    $scope.errflag = false;
	$scope.reDrawChart = function(input){
		$scope.errflag = false;
		var data = {
    		url: '/milestone', 
    		method: "GET"
 		};
 		if(input.token){
 			data.params = {user:input.user,repo:input.repo,token:input.token};
 		}else{
 			data.params = {user:input.user,repo:input.repo};
 		}

		$http(data)
 		.then(function(res){
 				var out = res.data;
 				for (var i = 0; i < out.length; i++) {
 					var due_on = null;
 					if(out[i].due_on){
 						due_on = new Date(out[i].due_on);
 					}else{
 						due_on = new Date(out[i].created_at);
 					}
 					dataTable.addRow([input.user+"/"+input.repo+"/"+out[i].title,due_on,due_on,due_on]);
 					//dataTable.addRow([input.user+"/"+input.repo+"/"+out[i].title,new Date(out[i].created_at),due_on]);
				}
				if(out.length > 0)
    				chart.draw(dataTable,options);
 				
 			},function(err){
 				$scope.errflag = true;
 				//console.log(err.data);
 		});
	}
});