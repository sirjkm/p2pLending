const router = require('express').Router();
let borrow = require('../models/borrow.model');

router.route('/').get((req, res) => {
    borrow.find()
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const lender = req.body.lender;
    const amount = Number(req.body.amount);
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newRequest = new borrow({
        username,
        lender,
        amount,
        duration,
        date,
    });

    newRequest.save()
        .then(() => res.json('Request added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    borrow.findById(req.params.id)
        .then(request => res.json(request))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    borrow.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    borrow.findById(req.params.id)
        .then(request => {
            request.username = req.body.username;
            request.lender = req.body.lender;
            request.amount = Number(req.body.amount);
            request.duration = Number(req.body.duration);
            request.date = Date.parse(req.body.date);

            request.save()
                .then(() => res.json('Request updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;