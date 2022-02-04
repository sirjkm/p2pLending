const router = require('express').Router();
let giveLoan = require('../models/giveLoan.model');

router.route('/').get((req, res) => {
    giveLoan.find()
        .then(offers => res.json(offers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const amount = Number(req.body.amount);
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newRequest = new giveLoan({
        username,
        amount,
        duration,
        date,
    });

    newRequest.save()
        .then(() => res.json('Offer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;