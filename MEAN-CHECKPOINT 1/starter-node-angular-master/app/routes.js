module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	// SEND / TO INDEX
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

};