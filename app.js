var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
// static path is in the public directory.
app.use(express.static(path.join(__dirname, 'public')));
// Routes
// Home
// get request for a route
// 1st parameter is the home page, 2nd parameter is a call back function with a request(req) and response(res) parameters.
// res.send will post message on localhost3000.
// imbeded javascript to loop through a array.
app.get('/', routes.home);

app.get('/create', (req, res) => {
    res.render('create');
});

// 1st photography pictures 
app.get('/photography_blog/:each_picture ?', routes.each_picture);

// notFound
// This is like a 404 error
app.get('*', routes.notFound);

app.listen(3000, function(){
    console.log("app is running on localhost:3000");
});