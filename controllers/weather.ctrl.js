import forecast from "../utils/forecast.js";
import geocode from "../utils/geocode.js";
//const address = (process.argv[2]);

export const weather = (req, res, next) => {

    if (!req.query.address) {
        return res.send('Please provide an address')
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send(error)
        }
        forecast(latitude, longitude, (error, Fdata) => {
            if (error) {
                return res.send(error)
            }
            // console.log(location);
            // console.log(Fdata)
            res.send({
                forecast: Fdata,
                location,
                address: req.query.address
            })
        })
    });



}