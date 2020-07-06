const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const coinRoutes = require('./route/coin-route');
const url = 'mongodb+srv://bee:bee123456789@cluster0.n23kr.mongodb.net/coindb?retryWrites=true&w=majority'
const app = express();

app.use(bodyParser.json());

app.use('/api/coin', coinRoutes);

app.use((req, res, next) => {
    const error = new Error('Could not find this route.', 404);
    next(error);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5001);
    })
    .catch(err => {
        console.log(err);
    });