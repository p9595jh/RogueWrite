var express = require('express');
var router = express.Router();
//=======================================<
const fs = require('fs-extra');
const formidable = require('formidable');

router.get('/', function(req, res, next) {
    res.send('/');
});

router.get('/tool', function(req, res, next) {
    res.render('tool', {
        title: 'TOOL'
    });
});

router.post('/image', function(req, res, next) {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const filePath = files.image.path;
        const ext = files.image.name.substring(files.image.name.lastIndexOf('.')).toLowerCase();
        const name = new Date().getTime() + ext;
        fs.copy(filePath, 'public/images/game/' + name, function(err) {
            if ( err ) {
                console.log(err);
                res.json({});
            } else {
                fs.copy(filePath, 'angular-src/src/images/game/' + name, function(err) {
                    if ( err ) {
                        console.log(err);
                        res.json({});
                    } else res.json({link: 'images/game/' + name});
                });
            }
        });
    });
});

module.exports = router;
