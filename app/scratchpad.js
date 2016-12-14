// requires controller module
const controller = require('./controller.js')

// passes through the popular movies 
controller.popular(result => {
    console.log(result)
})

//controller.view(result => {
//    console.log(result)
//})