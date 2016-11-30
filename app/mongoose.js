var mongoose = require ('mongoose')

var database = 'movie'
const server = 'mongodb://localhost/movie'
mongoose.connect(server,{server:{auto_reconnect:true}});
var db = mongoose.connection;

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

mongoose.model('User',UserSchema);