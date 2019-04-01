var express = require('express');
var app = express();

app.use('/page', function(req,res, next){
	console.log("a request for the page received");
	next();
});

app.get('/page' , function(req,res){
	res.send('My Page');
});

app.listen(3000);

