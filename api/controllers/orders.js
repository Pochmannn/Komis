const express = require('express');
const mongoose = require('mongoose');
const order = require('../models/order');
const router = express.Router();


const Order = require('../models/order');

router.get('/', (req, res, next) =>{
    Order.find()
    .then(docs => {
        res.status(200).json({
             wiadomosc: 'Zamowienia ',
             info:docs,
            });
    })
    .catch();
    
});

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        imie: req.body.imie,        
        nazwaSamochodu: req.body.nazwaSamochodu
    });

    order
        .save()
        .then((doc) => {
            res.status(200).json({ 
                wiadomosc: 'Dodano nowe zamówienie',
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomosc: err}));
       
});

router.get('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    Order.findById(id)
    .then(doc => {
        res.status(200).json({ 
            wiadomosc: 'Szczegoly zamowienia o id ' + id,
            info: doc,
        });

    })
    .catch((err) => res.status(500).json({ wiadomosc: err}));
    
});

router.patch('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    Order.findByIdAndUpdate(id, {
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc
    },{ new: true}
    )
    .then(doc =>{
        res.status(200).json({ 
        wiadomosc: 'Zmiana zamowienia o id ' + id,
        info: doc,
        });
    })  
    .catch((err) => res.status(500).json({ wiadomosc: err}));
    
});

router.delete('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    Order.findByIdAndDelete(id)
    .then((doc) => {
        res.status(200).json({ 
            wiadomosc: 'Usuniecie zamowienia o id ' + id,
            info: doc,
        });
    })    
    .catch((err) => res.status(500).json({ wiadomosc: err}));    
});

module.exports = router; 