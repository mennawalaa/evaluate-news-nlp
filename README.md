# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day.

### Step 3: Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

- [ ] Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## After the Aylien API

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers. 
- Test that the site is now available even when you stop your local server

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

## solution steps
 1. webpack setup
    --steps--
    0. 1. cd <project directory>
       2. npm install
    0. # Choose the necessary installation for your development mode
       1. npm i -D @babel/core @babel/preset-env babel-loader 
       2. npm i -D style-loader node-sass css-loader sass-loader
       3. npm i -D clean-webpack-plugin
       4. npm i -D html-webpack-plugin
       5. npm i -D mini-css-extract-plugin
       6. npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
 2. API call 
    - in function formHandler which handles the event of clicking the submit button the value of the input 
      url is being send to the server side through the post body then being added together with api key to the sentimentanalysis url then feed to fetch function that get the response back from the API and send it to the formHandler js file  
    - the response is  an object containing the ok msg if all parameters of request is fulfilled along   with the agreement of the text wether the text shows agreement or disagreement,confidence,irony,
    model and score_tag.
    - the results are then shown on the web page

 3. adding styles using scss
    0. setup
    0. 1. npm i -D style-loader node-sass css-loader sass-loader
    0. 2. add the scss loader to webpack config dev and prod folders 
    0. 2. 2. {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
    0. 3. import the scss folders in index.js

 4. test the functions using jest
    0. 1. install jest and add the jest run script
       2. npm install --save-dev jest
       3. "test": "jest",
       2. name a _test_ folder 
       3. make a test file for each function to test its functionatily
       3. 0. checkForName function defined  a valid variable with zero value which is set to one of the url is valid and remained zero if the url is invalid ,to test the function an valid url is set to input and the return value of function is compared to 1 to show that the valid input url passes  
       3. 1. formhandler is async function as it uses async await to fetch data from Api
        the test case only checks if the function is defined using toBeDefined() matcher
 5. adding Offline Functionality using service workers
   5. 0. setup 
      1. append plugin in the cofig files
      1. 0. const WorkboxPlugin = require('workbox-webpack-plugin');
      1. 1. new WorkboxPlugin.GenerateSW()
      2. install work box
      2. 0. npm install workbox-webpack-plugin --save-dev
      3. add the following script to html file before end of the body
      ```
      <script>
 // Check that service workers are supported
 if ('serviceWorker' in navigator) {
     // Use the window load event to keep the page load performant
     window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js');
     });
 }
</script>
      ```

 6. Deployment using Netlify
 6. 0. check the following link for complete steps

 ## Dependencies
 all Dependencies are found at the package.json file please make sure to use
  ```npm install  ``` before starting the project
##  important files
-- server->index.js contains all data related to local server driven by node js express library
--client -> js contain javascripts functions that is responsable for the web page functionatily
1. formHandler function fires on the submit event makes a post API call to the sentiment analysis and print the results on the page
2. nameChecker uses regex for url validation if the url is valid the API call at the formHandler is preformed and a valid url alert is shown, if the url is not valid an alert invalid is shown
3. webpack.dev.js contain module  entry ,output , sass and test loaders ,html(client library for event and api calls functionality),clean and service workers plugins 
note this config file set the rules for webpack to run in development mode (any update in the code appears immediatly on web page browser ) so its useful for the phase development of the project
4. webpack.prod.js contain module  entry ,output , sass and test loaders ,html  and service workers plugins
its used at the end of the development phase to form a dist folder which is a compressed form of the the project that can be runned faster on the browser ,once this folder is formed you are no longer at the development mode which means that the changes done on the code will not appear at the the site unless the dist folder is being rebuild to include those changes because at this phase (production phase) the browser run only the dist folder which have to rebuild after each change so those changes can appear 
5. test folder contain 2 testing files , a file for each client js file which tests the js function functionality
6. env used to create environment variable for the API key to use process.env.varname instead of the variable value which is only written at the env file that can be ignored when uploaded to get hup so the api key is kept secret 
7. views-> index.html contains the html that will run on the browser to form website
8. src-> index.js contian includes to all files that index.html file will use 

## How to run the project 
1. you need to start the server using 
 ```npm run start  ```
2. to run the project development mode
 ``` npm run build-dev ```
3. to run the project in production mode
 ```npm run build-prod``` 
