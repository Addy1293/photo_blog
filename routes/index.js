var photosJSON = require('../routes/photos.json');

// Home
// get request for a route
// 1st parameter is the home page, 2nd parameter is a call back function with a request(req) and response(res) parameters.
// res.send will post message on localhost3000.
// imbeded javascript to loop through a array.
exports.home = function (req, res){

    // creating a movies variable to call pictures. 
    var photos = photosJSON.photos;

    res.render('home',{
        title : "My Photography Blog",
        photos : photos
    });
};
// 1st photography pictures 
exports.each_picture = function(req, res) {
    var each_picture = req.params.each_picture;
    res.send("Page for each picture " + each_picture);
};

// notFound
// This is like a 404 error
exports.notFound = function(req, res) {
    res.send("This is not the page you're looking for");
};

