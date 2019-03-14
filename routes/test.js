const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'avatars/');
    },
    filename(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

router.post('/test', upload.single('avatar'), function(req, res) {
  console.log('UPLOAD SUCCESS', req.file);
  res.json({ success: true, file: req.file });
});

// router.post('/test', function(req, res) {
//   console.log('what???');
//   res.json({ success: false });
// });

router.post('/upload', upload.single('photo'), function (req, res) {
  if (!req.file) {
    console.log("No file received");
    return res.json({
      success: false
    });
  } else {
    console.log('file received');
    return res.json({
      success: true
    });
  }
});

router.get('/', function(req, res) {
  res.send('hello');
});

module.exports = router;
