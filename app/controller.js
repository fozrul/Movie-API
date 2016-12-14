'use strict'

const request = require('request')
var unirest = require('unirest')
var mongoose = require('mongoose'),
    key = 'fef1753927fd3fd57cb0d1ef20a63fb8'


// this is called in the scratchpad.js, it basically pulls the popular data from moviedb
// in the terminal I type node.scratchpad and it pulls the data through

/**
 * This function will output popular data from the moviedb
 *
 * pdata = raw result; //it will show raw data listed message
 *
 * @param {string} str: string argumnet that will be shown in message
 */


'use strict'


exports.doMovieSearch = (req, res, next) => { //q is the search parameter

    //search movie by ID along with API key

    const q = req.query.q // get the search term from the URL querystring

    const url = `https://api.themoviedb.org/3/movie/${q}?api_key=fef1753927fd3fd57cb0d1ef20a63fb8`

    request.get(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {

            const results = JSON.parse(body)

            console.log(results)

            const movie = {
                title: results.title,
                popularity: results.popularity,
                overview: results.overview
            }

            res.send({ movie: movie })
        } else {
            res.send(501, { message: 'Problem with Movie API query.', error: error, statusCode: response.statusCode })
        }
    })
}

exports.popular = function(completion) {
    unirest.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
        .end(function(result) {
            let pdata = result.raw_body // brings back the result in raw data
            pdata = JSON.parse(pdata)
            pdata = pdata.results

            if (pdata) {
                console.log("Success")
                    // console.log(pdata)
                completion(pdata)
            } else {
                console.log("Error")
            }
        })
}


// pulls down the data for id in the movies
exports.view = function(req, res, next) {
    var x = req.params['id:']
    var mdata
    unirest.get(`https://api.themoviedb.org/3/movie/` + x + key) // searches through the id in the moviedb
        .end(function(resul) {
            mdata = result.raw_body;
            mdata = JSON.parse(mdata)
            if (mdata) {
                console.log("Success")
                    // console.log(pdata)
                completion(mdata)
            } else {
                console.log("Error")
            }
        })
};