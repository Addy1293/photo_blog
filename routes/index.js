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

    var photos = photosJSON.photos;

    if (each_picture >= 1 && each_picture <= 6) {
        // This gets the picture description each time a diffent number is placed. 
        var photo = photos[each_picture - 1];
        // Specifying var title for the picture.
        var title = photo.title;

        var main_characters = photo.main_characters;

        res.render('each_picture', {
            photos : photos,
            title : title,
            photo : photo,
            main_characters : main_characters
        });
        // The name on the left is the variable accesible & value on the right is what it
    } else {
        res.render('notFound', {
            photos : photos,
            title : "This is not the page you are looking for."
        });
    }

};

// notFound
// This is like a 404 error
exports.notFound = function(req, res) {
    var photos = photosJSON.photos;

    res.render('notFound', {
        photos : photos,
        title : "This is not the page you are looking for."
    });
};