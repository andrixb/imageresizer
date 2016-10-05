var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    fs.readdir('./uploads', function(err, files) {
        res.render('list', {
            title: 'Assets Producer - List File',
            file: files
        });
    });
});

module.exports = router;
