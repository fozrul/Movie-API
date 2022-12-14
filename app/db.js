'use strict'

// file to manage the actual connections to the database

const storage = require('node-persist')
storage.initSync()

// exports the user connection
exports.usersConnection = function usersConnection(res, callback) {


    // define the storage file for the list of users
    const usersDB = storage.create({ dir: `./.modules/persist` })

    // initialise the connection (creates a new file if necessary)
    usersDB.init(err => {

        if (err) {
            console.log(err)
            return res.send(500, { message: 'Unable to initialise data store' })
        } else {
            return callback(usersDB) // can now read and write to the storage file
        }

    })
}