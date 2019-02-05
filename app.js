var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// Routes
// Home
// get request for a route
// 1st parameter is the home page, 2nd parameter is a call back function with a request(req) and response(res) parameters.
// res.send will post message on localhost3000.
app.get('/', function (req, res){
    res.render('home',{
        title : "My Photography Blog"
    });
});
// 1st photography pictures 
app.get('/photography_blog/:first_picture ?', function(req, res) {
    var first_picture = req.params.first_picture;
    res.send("Page for the 1st picture " + first_picture);
});

// notFound
// This is like a 404 error
app.get('*', function(req, res) {
    res.send("This is not the page you're looking for")
})

app.listen(3000, function(){
    console.log("app is running on localhost:3000");
});