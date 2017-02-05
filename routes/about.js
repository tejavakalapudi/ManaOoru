/**
 * Created by vakalapr on 2/5/17.
 */
var express = require('express');
var router = express.Router();
var path = require('./views');

/* GET About Us page. */
router.get('/about', function(req, res) {
    res.sendFile( path + "about.html" );
});

module.exports = router;