'use strict'

const request = require('request')

search('javascript', (err, data) => {
    console.log('START')
    if (err) {
        console.log(err.message)
    } else {
        console.log(data)
    }
    console.log('END')
})

function search(query, callback) {
    searchByString(query).then(data => {
        console.log('search query complete')
        callback(null, data)
    }).catch(err => {
        console.log('ERROR')
        console.log(err)
        callback(err)
    })
}

function searchByString(query) {
    return new Promise((resolve, reject) => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=fef1753927fd3fd57cb0d1ef20a63fb8`

        request.get(url, (err, res, body) => {
            if (err) {
                reject(Error('failed to make API call'))
            }
            const data = JSON.parse(body)

            resolve(data)
        })
    })
}