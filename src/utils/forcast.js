const request = require('request')


const forcast = (latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=3f1d10e6262f7cd0c9c43c7596620bf5&query=" + latitude + "," +longitude

    request({ url: url,json: true},(err,response) =>{
        
            if(err){
                callback("unable to connect to weather service",undefined)     
            }else if(response.body.err){
                callback("unable to find location",undefined)
            }else{
                callback(undefined,response.body.current.weather_descriptions[0] + ". It is " + response.body.current.temperature + " degrees out. And it feelslike " + response.body.current.feelslike + " degrees out.")
            }
    }) 
}

module.exports = forcast