const express = require('express');
const router = express.Router();
// ===============================================
const fs = require('fs-extra');
const formidable = require('formidable');
const Test = require('../models/test');

router.post('/image', (req, res, next) => {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const filePath = files.file.path;
        const ext = files.file.name.substring(files.file.name.lastIndexOf('.')).toLowerCase();
        const name = new Date().getTime() + ext;
        fs.copy(filePath, 'public/images/' + name, function(err) {
            if ( err ) {
                console.log(err);
                res.json({});
            } else {
                res.json({url: 'images/' + name});
            }
        });
    });
    // res.json({url: 'https://cdfront.tower.jp/~/media/Images/Tol/pc/article/feature_item/J-Pop-Indies/2019/02/01/0702_01.jpg'});
});

module.exports = router;
