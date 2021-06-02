const request = require("request")


const geocode = (address ,callback)=>{
    const geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1Ijoic2FtcmF0MTk5OCIsImEiOiJja295OGlmZ2MwbjcxMndtcGJkem1rdXlqIn0.JJtbPvNUxqlTbwse1mtKfA&limit=1"

    request({url:geocodeURL,json:true},(err,response)=>{
        if(err){
            callback("unable to connect location services",undefined)
        }else if(response.body.features.length === 0){
            callback("unable to find location, try another search",undefined)
        }else{
            const data = {
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            }
            //console.log(data)
            callback(undefined,data)
            // const longitude=response.body.features[0].center[0]
            // const latitude=response.body.features[0].center[1]
            // callback(longitude,latitude)
        }
    })
}



module.exports = geocode