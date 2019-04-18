const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Temp = require('../models/temp');

router.get('/asdf', (req, res, next) => {
    Temp.find(
        {coworker: {$in: ['5c9343bc0bf80e00ecd1409a']}},
        {block: 0},
        (err, temps) => {
            if ( err ) res.send(err);
            else res.send(temps);
    });
});

module.exports = router;
