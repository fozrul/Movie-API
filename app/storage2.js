'use strict'

const request = require('request')

const storage = require('node-persist')


storage.initSync()

exports.addMovie = function(movie, callback) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fef1753927fd3fd57cb0d1ef20a63fb8&query=Suicide%20Squad`
    request.get(url, (err, res, body) => {
        if (err) return callback(Error('could not complete request'))
        const json = JSON.parse(body)
        if (json.totalbody === 0) {
            console.log('no results')
            return callback(Error('movie not found'))
        }

        const movie = []
        const results = JSON.parse(body).items
        console.log(body)

        // for (let i = 0; i < results.length; i++) {
        //     const movie = {
        //         title: results[i].volumeInfo.title,
        //         overview: results[i].volumeInfo.overview,
        //         popularity: results[i].volumeInfo.popularity
        //     }
        //     movie.push(movie)
        // }
        // storage.setItemSync(movie.body, movie)
        // return callback(body, "data")
    })
}