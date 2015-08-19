/*
		11   44   44    11
		11   44   44    11
		11   4444444    11
		11		  44    11	David Gosma
		11		  44    11	davidgosma@gmail.com
		11		  44    11	onefour.one
*/

var sys = require('sys'),
	my_http = require('http'),
	path = require('path'),
	url = require('url'),
	fs = require('fs'),
	express = require('express'),
	engine = require('ejs-locals'),
	server = express();

server.set('view engine', 'ejs');
server.engine('ejs', engine);
server.use(express.static('./static'));

server.use(function(req, res, next) {
	console.log(req.url);
	next();
});

server.get('/',  function(req, res) {
	res.render('index', {title: 'Home'});
});

/*		404		*/
server.use(function(req, res) {
	res.render('404');
	res.end();
})

server.listen(8080, function() {
	console.log('Server listening on port 8080');
});