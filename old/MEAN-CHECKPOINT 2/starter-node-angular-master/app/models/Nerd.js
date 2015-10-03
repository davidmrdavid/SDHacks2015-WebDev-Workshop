// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
/*module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});*/



var accountsSchema = mongoose.Schema({
	email : String,
	user  : String,
	pass  : String
});

exports.Accounts = mongoose.model('Account',accountsSchema); 
