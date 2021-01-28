const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const carRoutes = require('./api/controllers/cars');
const opinionRoutes = require('./api/controllers/opinions');
const orderRoutes = require('./api/controllers/orders');
const userRoutes = require('./api/routes/users');

mongoose.connect('mongodb+srv://Michal:'+
    process.env.hasloAtlasa +
    '@cluster0.dsq2y.mongodb.net/cars?retryWrites=true&w=majority',
    {
    useNewUrlParser: true, useUnifiedTopology: true 
    }
);

app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/cars', carRoutes);
app.use('/opinions', opinionRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);


app.use((req, res, next) => {
    const error = new Error("Nie odnaleziono strony");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({wiadomosc: error.message});
});

module.exports = app;