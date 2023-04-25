

import request from 'request'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b3d6f309f317a5668431e9e9a8bf2e68&query=' + latitude + ',' + longitude 
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature  + ' its feelLike '+ body.current.feelslike+'. There is a ' + body.current.precip + '% chance of rain.')
        }
    })

}

export default forecast