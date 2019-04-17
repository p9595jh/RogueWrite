const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/asdf', (req, res, next) => {
    const ids = [
        '5c874456b3e6912118647014',
        '5c90cf5685295d157453e12e',
        '5c9343bc0bf80e00ecd1409a'
    ];
    User.find({_id: {$in: ids}}, (err, users) => {
        if ( err ) res.send(err);
        else res.send(users);
    });
});

module.exports = router;
