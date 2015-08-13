var github 	= require('../models/githubModel')


var milestone = function(route){
	route
	.get('/milestone',function(req,res){
		if(req.query.token){
			github.authenticate({
    				type: "oauth",
    				token: req.query.token
			});
		}
		if(req.query.user && req.query.repo){
			github.issues.getAllMilestones({
 				user: req.query.user,
 				repo: req.query.repo
			}, function(err, data) {
    			if(err)
					res.status(500).send(err);
				else
					res.status(200).send(data);
			});
		}else{
			res.status(400).send({'errorMessage':'username and repo required'});
		}
	});
}

module.exports = milestone;