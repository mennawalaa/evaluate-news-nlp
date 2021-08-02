var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
require("@babel/polyfill");
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);
var textapi = new aylien({
    application_key: `${process.env.API_KEY}`
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
//before 8080
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/meaningcloud', (req, res) => {
    const newObject = {
        agreement: req.body.agreement,
        text: req.body.text

    }
    projectData = newObject;
    res.send(projectData);

});
