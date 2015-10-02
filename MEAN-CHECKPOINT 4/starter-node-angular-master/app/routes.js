// MODULE DEPENDENCIES
var mongoose = require('mongoose'   );
var models   = require('./models/Nerd.js');

var accountsModel = models.Accounts;
var messagesModel = models.Messages;

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	app.get('/chat', function(req, res){
		res.sendfile('./public/views/chat.html');
	});

	app.get('/login', function(req, res){
		console.log("/login!");
		console.log(req["query"]);
		var userName  = req["query"]["user"];
		var passWord  = req["query"]["pass1"];
		console.log(userName);
		console.log(passWord);

		//MORE
		console.log("ABOUT TO LUGIN!");
     	/*accountsModel.find({}, function(err,data){
			console.log(data);
			console.log(err);
		});*/ 
		accountsModel.find({}, function(err,data){
			var found = "failure";
			for( var index = 0; index< data.length; index++){
				console.log(data[index]["pass"] == passWord);
			if(data[index]["pass"] == passWord){
				console.log("ENTER!");
				var found = "yes";
				break;

			}

		}
			res.json({result:found});

		});


	});

	app.get('/create', function(req, res){
		console.log('/create!');
		console.log(req["query"]);
		var userA   = req["query"]["user"];
		var passA  = req["query"]["pass1"];
		var emailA  = req["query"]["email"];
		console.log(userA);
		console.log(passA);
		console.log(emailA);
		var json = {};
		json["email"] = emailA;
		json["user"]  = userA;
		json["passA"] = passA;
		//MORE
		var newAccount = new accountsModel(json);
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
		accountsModel.find({}).exec(function(err,data){
			if(err){
				console.log("ALL ACCOUNTS");
			}
			else{
				console.log("ALL DATA "+ data);
			}
		})
	});

	/*app.get('/sendMessage', function( req, res ){
		console.log(req["query"]);
		var message = requ["query"]["msg"];
		var user    = requ["query"]["user"];
		var date    = requ["query"]["date"];

		var newMessage = new messagesModel({
			"user"    : user,
			"message" : message,
			"date"    : date
		});

		newMessage.save(function(err,data){
			if(err){
				console.log(err);
			}
			else{
				console.log(data);
			}
		})
	});*/

	/*app.get('/getMessages', function( req, res ){
		messagesModel.find({}).sort({date:-1}).exec(function(err,docs){
			console.log(docs);
		});
	})*/

};