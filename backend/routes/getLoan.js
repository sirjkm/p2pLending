const router = require('express').Router();
let getLoan = require('../models/getLoan.model');

router.route('/').get((req, res) => {
    getLoan.find()
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const amount = Number(req.body.amount);
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newRequest = new getLoan({
        username,
        amount,
        duration,
        date,
    });

    newRequest.save()
        .then(() => res.json('Request added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;