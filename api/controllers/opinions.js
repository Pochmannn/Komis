const express = require('express');
const mongoose = require('mongoose');
const opinion = require('../models/opinion');
const router = express.Router();


const Opinion = require('../models/opinion');

router.get('/', (req, res, next) =>{
    Opinion.find()
    .then(docs => {
        res.status(200).json({
             wiadomosc: 'Opinie ',
             info:docs,
            });
    })
    .catch();
    
});

router.post('/', (req, res, next) => {
    const opinion = new Opinion({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,        
        opinion: req.body.opinion
    });

    opinion
        .save()
        .then((doc) => {
            res.status(200).json({ 
                wiadomosc: 'Dodano nową opinie o samochodzie',
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomosc: err}));
       
});

router.get('/:opinionId', (req, res, next) =>{
    const name = req.params.name;
    const id = req.params.opinionId;
    Opinion.findById(id)
    .then(doc => {
        res.status(200).json({ 
            wiadomosc: 'Opinie o samochodzie ',
            info: doc,
        });

    })
    .catch((err) => res.status(500).json({ wiadomosc: err}));
    
});



module.exports = router; 