'use strict'

// modules imported
const request = require('request')

const storage = require('node-persist')
    // creates file storage
var fs = require('fs')


storage.initSync()

// pulls the movie data and adds to the storage pesist folder
exports.addMovie = function(movie, callback) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fef1753927fd3fd57cb0d1ef20a63fb8&query=Interstellar`
    request.get(url, (err, res, body) => {
        if (err) return callback(Error('could not complete request'))
        const json = JSON.parse(body)
        if (json.totalbody === 0) {
            console.log('no results')
            return callback(Error('movie not found'))
        }

        // the parameters of the movie result that I want to store
        const movie = {
            title: json.results[0].title,
            popularity: json.results[0].popularity,
            overview: json.results[0].overview
        }

        // prints the movie details I want
        console.log(movie)
        storage.setItemSync(movie.title, movie)
        return callback(null, "movie")
    })
}