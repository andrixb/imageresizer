var express = require('express');
var multer = require('multer');
var async = require('async');
var router = express.Router();

var upload = multer({ dest: 'uploads/' }).single('images');

/* GET upload page. */
router.get('/upload', function(req, res, next) {
    // res.render('upload', { title: 'Assets Producer - Upload File' });
});

/* POST upload files. */
router.post('/upload', function(req, res, next) {
    async.series({
        one: function(cb) {
            upload(req, res, function(err) {
                if (err) {
                    console.log(err);
                }
                cb(null, 'one');
            });
        },
        two: function(cb) {
            res.render('upload', { title: 'Assets Producer - Upload File' });
            cb(null, 'two');
        }
    }, function(err, results) {
        console.log(err);
    });
});

module.exports = router;
