import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv'
import cors from "cors"
dotenv.config();



//import.meta.url get the current module’s file URL and pass it to the fileURLToPath function  to convert it to a file path.
const __filename = fileURLToPath(import.meta.url);
//pass it to the dirname method from the path module
const __dirname = path.dirname(__filename,);

const app = express();
app.use(cors({
    origin:"https://weather-app-3uwb.onrender.com/"
}))
app.use(express.json());

// Define paths for Express config ,
const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory 
app.use(express.static(publicPath));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


import home from "./routes/home.route.js"
app.use('/', home);
import about from "./routes/about.route.js"
app.use('/about', about)
import help from "./routes/help.route.js"
app.use('/help', help)
import weather from "./routes/weather.route.js"
app.use('/weather', weather)


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})



const port = process.env.PORT || 3000
app.listen(port, () => console.log('> Server is up and running on port : ' + port))