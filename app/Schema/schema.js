'use strict'

// import the mongoose package
const mongoose = require('mongoose')
const db = {
    user: 'fozrul',
    pass: 'ruhid1234'
}

mongoose.connect(`mongodb://${user}:${pass}@ds163667.mlab.com:63667/movie`)
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

// create a schema
// const userSchema = new Schema({
// 	name: String,
// 	username: String,
// 	password: String
// })

// create a model using the schema
// exports.User = mongoose.model('User', userSchema)

// create a schema
const movieSchema = new Schema({
    title: String,
    description: String,
    movieID: String
})

// create a model using the schema
exports.User = mongoose.model('Movie', movieSchema);