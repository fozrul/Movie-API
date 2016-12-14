'use strict'

// modules imported
const request = require('request')

const storage = require('node-persist')

// syncs into storage file
storage.initSync()

// calls for the movie details
exports.addMovie = function(movie, callback) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fef1753927fd3fd57cb0d1ef20a63fb8&query=Suicide%20Squad`
    request.get(url, (err, res, body) => {
        if (err) return callback(Error('could not complete request'))
        const json = JSON.parse(body) // returns the body of the website
        if (json.totalbody === 0) {
            console.log('no results')
            return callback(Error('movie not found'))
        }

        // passes through the whole of the movie body
        const movie = []
        const results = JSON.parse(body).items
        console.log(body)
    })
}