// creates instance using restify

// require ("mongoose.js");
var restify = require('restify')
var server = restify.createServer()


// imports plugins

server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.CORS())

// imports custome module
const authorisation = require('./authorisation.js')
const users = require('./users')
var film = require('./controller.js')

//REST method

// server.get('/popular', film.getAllPopular)


server.get('/popular', (req, res, next) => {
    film.popular((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.post('/popular', film.addPopular)
server.post('/popular', (req, res, next) => {
    film.popular((result) => {
        res.send(200, result)
        res.end()
    })
})


// server.get('/popular/:id', film.getPopularItem)
server.get('/popular/:id', (req, res, next) => {
    film.getPopularItem((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.del('/popular/:id', film.deletePopularItem)
server.del('/popular/:id', (req, res, next) => {
    film.deletePopularItem((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.put('/popular/:id', film.updatePopularItem)
server.put('/popular/:id', (req, res, next) => {
    film.updatePopularItem((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.get('/films/:id:',film.getFilm)
server.get('/films/:id', (req, res, next) => {
    film.getFilm((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.post('/users', user.register)
server.post('/users', (req, res, next) => {
    user.register((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.del('/users/:username', user.deleteUser)
server.del('/users/:username', (req, res, next) => {
    user.deleteUser((result) => {
        res.send(200, result)
        res.end()
    })
})

// server.put('/users/:username', user.updateUser)
server.put('/users/:username', (req, res, next) => {
    user.deleteUser((result) => {
        res.send(200, result)
        res.end()
    })
})

// add a new user to the DB (pending confirmation)
server.post('/users', users.validateUser, users.add)

//connecting to port

var port = process.env.PORT || 8080
server.listen(port, function(eer) {
    if (eer)
        console.error(err);
    else
        console.log("Server online")

})