const express = require('express');
const mongoose = require('mongoose');
const car = require('../models/car');
const router = express.Router();

const Car = require('../models/car');

router.get('/', (req, res, next) =>{
    Car.find().
    then(docs => {
        res.status(200).json({
             wiadomosc: 'Nasze samochody ',
             info:docs,
            });
    }).
    catch();
    
});

router.post('/', (req, res, next) => {
    const car = new Car({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc    
    });

    car
        .save()
        .then((doc) => {
            res.status(200).json({ 
                wiadomosc: 'Dodano nowy samochód',
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomosc: err}));
       
});

router.get('/:carId', (req, res, next) =>{
    const id = req.params.carId;
    Car.findById(id)
    .then(doc => {
        res.status(200).json({ 
            wiadomosc: 'Szczegoly samochodu o id ' + id,
            info: doc,
        });

    })
    .catch((err) => res.status(500).json({ wiadomosc: err}));
    
});

router.patch('/:carId', (req, res, next) =>{
    const id = req.params.carId;
    car.findByIdAndUpdate(id, {
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc
    },{ new: true}
    )
    .then(doc =>{
        res.status(200).json({ 
        wiadomosc: 'Zmiana samochodu o id ' + id,
        info: doc,
        });
    })  
    .catch((err) => res.status(500).json({ wiadomosc: err}));
    
});

router.delete('/:carId', (req, res, next) =>{
    const id = req.params.carId;
    Car.findByIdAndDelete(id)
    .then((doc) => {
        res.status(200).json({ 
            wiadomosc: 'Usuniecie samochodu o id ' + id,
            info: doc,
        });
    })    
    .catch((err) => res.status(500).json({ wiadomosc: err}));    
});

module.exports = router; 