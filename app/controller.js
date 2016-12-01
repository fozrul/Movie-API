var unirest = require ('unirest')
var mongoose = require ('mongoose'),
key = '?api_key=fef1753927fd3fd57cb0d1ef20a63fb8',
pdata



exports.popular = function(completion){
    unirest.get("https://api.themoviedb.org/3/movie/popular"+key)
        .end(function(result){
            pdata = result.raw_body
            pdata = JSON.parse(pdata)
            pdata = pdata.results

            if(pdata){
                console.log("Success")
                // console.log(pdata)
                completion(pdata)
            }else{
                console.log("Error")
            }
        })
}



exports.view = function(req, res, next){
    var x = req.params['id:']
    var mdata
    unirest.get("https://api.themoviedb.org/3/movie/"+ x + key)
    .end(function(resul){
        mdata = result.raw_body;
        mdata = JSON.parse(mdata)

        if(mdata){
                console.log("Success")
                // console.log(pdata)
                completion(mdata)
            }else{
                console.log("Error")
            }
        })
}

 //   console.log(mdata)
 //   if(mdata){
 //       console.log("Success view")
 //       res.json({
 //           type: true,
 //           data: mdata
 //       })
 //   }else{
 //       console.log("Error")
 //   }
//    });
//}