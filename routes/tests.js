const express = require('express');
const router = express.Router();
// ===============================================

function randArr() {
    let arr = [];
    for (let i=0; i<10; i++) arr.push(new Date().getTime());
}

const resources = randArr();

router.get('/', (req, res, next) => {
    res.send(resources);
});

router.get('/:id', (req, res) => {
    res.json({item: resources[req.params.id]});
});

module.exports = router;
