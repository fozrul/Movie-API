'use strict'

const file = require('./storage2')
    // passing a valid movie name
file.addMovie('Interstellar', (err, movie) => {
    if (err) {
        console.log('ERROR')
        console.log(err.message)
    } else {
        console.log('NO ERROR')
        console.log(movie)
    }
})