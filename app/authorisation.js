'use strict'

const usersConnection = require('./db').usersConnection // this uses the db.js file

exports.authorize = function authorize(req, res, next) { // requires authorisation
    const auth = req.authorization

    if (!auth || !auth.basic) return res.send(401, { message: 'Need basic authorization header' })

    const username = auth.basic.username // uses username parameters    
    const password = auth.basic.password // uses password parameters

    usersConnection(res, usersDB => { // added values into the data base
        const users = usersDB.values()

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password && users[i].confirmed === true) return next()
        }
        return res.send(401, { message: 'Username or password incorrect, or registration not confirmed' }) // if username or password is in correct
    })

}