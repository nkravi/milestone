var express 	= require('express');
var routes 		= require('./routes/route');
var bodyParser	= require('body-parser');
var app 		= express();
var path 		= require('path');
//app.set('views', __dirname + './../client/views');

//middleware
app.use('/', express.static(path.join(__dirname,'./../public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routes);

//create and start server
var port   = process.env.PORT || 8080;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});