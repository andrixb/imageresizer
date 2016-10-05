var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/edit', function(req, res, next) {
 res.render('edit',  { title: 'Assets Producer - Edit Image' });
});

module.exports = router;