// creates instance using restify

// require ("mongoose.js");
var restify = require ('restify');
var server = restify.createServer();

// imports plugins

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// imports custome module

var film = require("./controller.js")
var user = require("./client.js")

//REST method

// server.get('/popular', film.getAllPopular)
// server.post('/popular', film.addPopular)

server.get('/popular', (req, res, next) => {
    film.popular((result) => {
        res.send(200, result)
        res.end()
    })
})

server.post('/popular', (req, res, next) => {
    film.popular((result) => {
        res.send(200, result)
        res.end()
    })
})


// server.get('/popular/:id', film.getPopularItem)
// server.del('/popular/:id', film.deletePopularItem)
// server.put('/popular/:id', film.updatePopularItem)

// server.get('/films/:id:',film.getFilm)
// server.post('/users', user.register)

// server.del('/users/:username', user.deleteUser)
// server.put('/users/:username', user.updateUser)

//connecting to port

var port = process.env.PORT || 8080;
server.listen(port, function(eer){
    if(eer)
    console.error(err);
    else
    console.log("Server online");

});