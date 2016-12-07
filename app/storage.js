'use strict'

const request = require('request')

const storage = require('node-persist')


storage.initSync()

exports.addMovie = function(movie, callback) {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=fef1753927fd3fd57cb0d1ef20a63fb8&query=Suicide%20Squad`
	request.get( url, (err, res, body) => {
		if (err) return callback(Error('could not complete request'))
		const json = JSON.parse(body)
		if (json.totalItems === 0) {
			console.log('no results')
			return callback(Error('movie not found'))
		}
		const data = {
			title: title,
			overview: overview,
			popularity: popularity
		}
		storage.setItemSync(movie.data)
		return callback(null, data)
	})
}