'use strict'

const request = require('request')

const storage = require('node-persist')

key = 'fef1753927fd3fd57cb0d1ef20a63fb8'
storage.initSync()

exports.addMovie = function(popular, callback) {
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
	request.get( url, (err, res, body) => {
		if (err) return callback(Error('could not complete request'))
		const json = JSON.parse(body)
		if (json.totalItems === 0) {
			console.log('no results')
			return callback(Error('movie not found'))
		}
		const data = {
			title: `${json.items[0].volumeInfo.title}: ${json.items[0].volumeInfo.subtitle}`,
			overview: json.items[0].volumeInfo.overview[0],
			popularity: json.items[0].volumeInfo.popularity
		}
		storage.setItemSync(popular, data)
		return callback(null, data)
	})
}