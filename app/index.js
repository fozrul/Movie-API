// creates instance using restify

require ("./mongoose.js");
var restify = require ('restify');
var server = restify.createServer();

// imports plugins

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// imports custome module

var film = require("./controller.js")
var user = require("./user.js")

//REST method

server.get('/film/popular', film.popular);
server.get('/film/view/id:',film.view);
server.post('/register', user.register);
server.post('/login', user.login);
server.del('/del', user.deleteuser);
server.put('/update', user.upUser);

var port = process.env.PORT;
server.listen(port, function(err){
    if(eer)
    console.error(eer);
    else
    console.log("Server is online");

});

var port = process.env.PORT || 8080;
server.listen(port, function(eer){
    if(eer)
    console.error(err);
    else
    console.log("Server online");

});