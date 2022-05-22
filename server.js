const express = require('express');
const { render } = require('express/lib/response');
const app = express();
const fireData = require('./models/avatar.js');
const port = 3000;

//MIDDLEWARE
app.use(express.static(__dirname + "/public"));


// LISTEN
app.listen(3000, () => {
    console.log('listening!');
});

//INDEX
app.get('/avatar', (req, res) => {
    res.render('index.ejs', { data: fireData });
});

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW
app.get('/avatar/:index', (req, res) => {
    res.render('show.ejs', { data: fireData[req.params.index] });
});