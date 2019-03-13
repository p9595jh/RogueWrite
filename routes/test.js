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

router.post('/', upload.single('avatar'), (req, res) => {
  console.log('UPLOAD SUCCESS', req.file);
  res.json({ success: true, file: req.file });
});

module.exports = router;
