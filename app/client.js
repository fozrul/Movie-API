var request = require ('request')
var mongoose = require ("mongoose")
var Client = mongoose.model("Client")

exports.register = function (req, res, next){
    var name = req.body.username
    console.log("registered:"+ name)
    var pass = req.body.password
    var adduser = new Client();
    adduser.username = name
    adduser.password = pass
    adduser. save()
}

exports.login = function (req, res, next){
    var username = req.body.username
    console.log("Logged in:"+username)
    var pass = req.body.password
    Client.findOne ({username:username}, function (data){

    });
}