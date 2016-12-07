'use strict'

const file = require('./storage')

// passing a valid ISBN
file.addMovie('343611', (err, result) => {
	if(err) {
		console.log('ERROR')
		console.log(err.message)
	} else {
		console.log('NO ERROR')
		console.log(result)
	}
})