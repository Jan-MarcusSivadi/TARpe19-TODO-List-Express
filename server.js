/// Imports
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routes = require('./routes/web');

// use express
const app = express();

// set view engine with ejs
app.set('view engine', ejs);

// use express static method for public folder
app.use(express.static('public'));

// use bodyParser to endcode url
app.use(bodyParser.urlencoded({extended: true}));

// use routes
app.use(routes);

// listen for http://localhost:3000/...
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});