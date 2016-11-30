var request = require ('request')
var mongoose = require ("mongoose")
var User = mongoose.model("User")

// registers new users into database

exports.register = function (req, res, next){
    var name = req.body.username
    console.log("registered:"+ name)
    var pass = req.body.password
    var adduser = new User();
    adduser.username = name
    adduser.password = pass
    adduser.save()
}

// checks login details with data in database

exports.login = function (req, res, next){
    var username = req.body.username
    console.log("Logged in:"+username)
    var pass = req.body.password
    User.findOne ({username:username}, function (data){

    });
}