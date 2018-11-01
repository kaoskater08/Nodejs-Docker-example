// Load express and os modules with 'require' directive
var express = require('express');
var os = require('os');

// Set variables
var hostname = os.hostname();
var port = 8081;
var app = express();
app.set('view engine', 'ejs');

// Define request response in root URL (/)
app.get('/', function(req, res) {
	res.render('index', { hostname: hostname });
});

// Launch listening server on port 8081
app.listen(port, () => {
	console.log('app listening on port: ' + port);
});
