'use strict'

const restify = require('restify')
const server = restify.createServer()



const authorization = require('./authorisation')
const users = require('./users')

server.use(restify.fullResponse())
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.authorizationParser())

//server.get('/moviesearch', moviedbapi.doMovieSearch)

server.post('/users', users.validateUser, users.add) // add a new user to the DB (pending confirmation)
server.post('/users/confirm/:username', users.validateCode, users.confirm) // confirm a pending user
server.del('/users/:username', authorization.authorize, users.delete) // delete a user
const port = process.env.PORT || 8080

server.listen(port, err => console.log(err || `App running on port ${port}`))