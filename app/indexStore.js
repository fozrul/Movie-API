'use strict'

const file = require('./storage')
    // passing a valid ISBN
file.addMovie('Suicide', (err, movie) => {
    if (err) {
        console.log('ERROR')
        console.log(err.message)
    } else {
        console.log('NO ERROR')
        console.log(movie)
    }
})