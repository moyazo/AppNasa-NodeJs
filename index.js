'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.use('/', require('./router/apods'));

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@nasa-app.hficxsv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB CONNECTED'))
    .catch((e) => console.log(e.message));

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Error 404',
        des: 'Page not Found',
    });
}).listen(port);
console.log('APP RUNNING ON PORT 8000');
