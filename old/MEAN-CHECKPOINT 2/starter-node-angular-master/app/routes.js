// MODULE DEPENDENCIES
var mongoose = require('mongoose'   );
var models   = require('./models/Nerd.js');

var accountsModel = models.Accounts;

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	app.get('/login', function(req, res){
		console.log("/login!");
		console.log(req["query"]);
		var userName  = req["query"]["user"];
		var passWord  = req["query"]["pass1"];

		//MORE
		console.log("ABOUT TO LUGIN!");
/*		accountsModel.find({}, function(err,data){
			console.log(data);
			console.log(err);
		}); */
		accountsModel.find({ user: userName}, function(err,data){
			console.log(data);
			if(data[0]["pass"] == passWord){
				console.log("ENTER!");
				res.json({result:"success!"});
			}
			else{
				res.json({result:"failure"});
			}
		});


	});

	app.get('/create', function(req, res){
		console.log('/create!');
		console.log(req["query"]);
		var user   = req["query"]["user"];
		var pass   = req["query"]["pass1"];
		var email  = req["query"]["email"];

		//MORE
		var newAccount = new accountsModel({ "email" : email,
											 "user"  : user,
											 "pass"  : pass });
		console.log("RIGHT B4!");
		console.log(newAccount);
		newAccount.save(function(err,data){
			if(err){
				console.log(err);
			}
			else{
				console.log(data);
			}
		});
	});

};