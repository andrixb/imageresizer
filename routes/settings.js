var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/settings', function(req, res, next) {
 res.render('settings',  { title: 'Assets Producer - Settings' });
});

module.exports = router;