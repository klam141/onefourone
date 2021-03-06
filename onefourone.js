/*
		11   44   44    11
		11   44   44    11
		11   4444444    11
		11        44    11	David Gosma
		11        44    11	davidgosma@gmail.com
		11        44    11	onefour.one
*/

var sys 		= require('util'),
	http 		= require('http'),
	port 		= process.env.port || 8080
	path 		= require('path'),
	url 		= require('url'),
	fs 			= require('fs'),
	express 	= require('express'),
	engine 		= require('ejs-locals'),
	bodyParser	= require('body-parser'),
	fetcher		= require('./fetcher/fetcher'),
	server 		= express();
	
var mysql 		= require('mysql'),
	connection	= mysql.createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: '',
		database	: 'posts'
});
	
server.set('view engine', 'ejs');
server.engine('ejs', engine);
server.use(express.static('./static'));

http.get('http://www.onefour.one/', function(res) {
	console.log(res.statusCode);
	res.on('error', function(error) {
		console.log(error);
	});
});

server.use(function(req, res, next) {
	console.log(req.url);
	next();
});

server.get('/',  function(req, res) {
	res.render('index', {title: 'Home', posts: fetcher(connection, 5)});
});

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
server.post('/', urlencodedParser, function(req, res){
	if(!req.body) return res.sendStatus(400);
    console.log('Submission Recieved');
});
  
/*		404		*/
server.use(function(req, res) {
	res.render('404');
	res.end();
})

server.listen(port, function() {
	console.log('Server listening on port 8080');
});
