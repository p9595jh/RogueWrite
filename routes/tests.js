const express = require('express');
const router = express.Router();
const Test = require('../models/test');

router.get('/input', (req, res, next) => {
    
});

router.get('/a', (req, res, next) => {
    // const data = {
    //     id: new Date().getTime(),
    //     arr: []
    // };
    // Test.findOneAndUpdate({a: 0}, {$push: {b: data}}, (err, test) => {
    //     res.send(test);
    // })
});

router.get('/b', (req, res, next) => {
    let idx = 1;
    const push = {[`b.${idx}.arr2`]: 'hello'};
    Test.findOneAndUpdate({a: 0}, {$push: push}, (err, test) => {
        if ( err ) console.log(err);
        res.send(test);
    });
});

router.get('/c', (req, res, next) => {
    let idx = 1;
    const pull = {[`b.${idx}.arr2`]: ['hello']};
    Test.findOneAndUpdate({a: 0}, {$pullAll: pull}, (err, test) => {
        if ( err ) console.log(err);
        res.send(test);
    });
});

module.exports = router;
