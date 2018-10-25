//Load express module with 'require' directive
var express = require('express')
var os = require('os')
var hostname = os.hostname()
var app = express()
app.set('view engine', 'ejs')

//Define request response in root URL (/)
app.get('/', function(req, res) {
	res.render('index', { hostname: hostname })
})

//Launch listening server on port 8081
app.listen(8081, function() {
	console.log('app listening on port 8081!')
})
