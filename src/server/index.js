let data = {}
var path = require('path')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//for hiding the api key
const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");
const router = express.Router();
require("@babel/polyfill");



// You could call it aylienapi, or anything else
//console.log(process.env);

let key = process.env.API_KEY
console.log("the hiden key", key)
//let key = "02c9dc63ce00adaf91ac4e4fbf65c872"
const cors = require('cors');
//const { send } = require('process');


const app = express();

app.use(express.static('dist'))
app.use(express.json());
console.log(__dirname)
app.use(cors());


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
//before 8080
// designates what port the app will listen to for incoming requests
//app.listen(8080, function () {
//  console.log('Example app listening on port 8080!')
//})

//app.get('/send', function (req, res) {
//  res.send(mockAPIResponse)
//})
/*
app.post('/meaningcloud', (req, res) => {
    const newObject = {
        agreement: req.body.agreement,
        text: req.body.text,
        key: textapi.application_key
    }
    projectData = newObject;
    res.send(projectData);

});


app.get(`/data`, function (req, res) {

    res.send(data);
});
//export { sendApi }
//module.exports = sendApi
*/

app.post('/send', async (req, res) => {
    //  console.log("this is the request coming from js", req);
    //  const add = req.body;
    //  mockAPIResponse.json["greeting"] = "hello";
    //   response.json(mockAPIResponse.json);
    // let data = new FormData();
    // data.set('key', key);
    //data.set('txt', formText);
    // data.set('lang', "en");"
    //  let txturl = "https://jamesclear.com/five-step-creative-process"
    // console.log(data.values());
    // let url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${txturl}&lang=en`;
    // const requestOptions = {
    //   method: 'POST',
    // redirect: 'follow'

    //}
    console.log("sucess", req.body.url);
    try {
        let txturl = "https://jamesclear.com/five-step-creative-process"
        let url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${req.body.url}&lang=en`;
        const response = await fetch(url);
        //   console.log("the data coming from fetch", response);
        //  mockAPIResponse.json["comingdata"] = response;
        // response.json(mockAPIResponse.json);
        const senddata = await response.json();
        res.send(senddata);

    }
    catch (error) {
        console.log("error in fetch in post", error);
    }

})
//before 8080
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})