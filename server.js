const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routes = require('./routes/web');

const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));

app.use(routes);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});