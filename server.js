// Setup empty JS object to act as endpoint for all routes


// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Dependencies */
var cors = require('cors');
var bodyParser = require('body-parser');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 8000;
const server = app.listen(port, listening);


// Callback to debug
function listening() {
    console.log("hi");
}

// Initialize all route with a callback function
const projectData = [];

app.get('/all', function (req, res) {
    res.send(projectData);
});

app.post('/weather', function (req, res) {
    console.log("arrived");
    //key?
    // var newData = { temperature, date, userRespon };
    //get each of the temp and date w kda
    // newData.temperature = req.body;

    projectData.push(req.body);
    console.log(projectData, "data");

})



// Callback function to complete GET '/all'


// Post Route

