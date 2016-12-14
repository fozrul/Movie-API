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

exports.popular = function(completion) {
    unirest.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
        .end(function(result) {
            pdata = result.raw_body // brings back the result in raw data
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