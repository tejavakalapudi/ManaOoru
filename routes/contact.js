/**
 * Created by vakalapr on 2/5/17.
 */
var express = require('express');
var router = express.Router();
var path = require('./views');

/* GET Contact Us page. */
router.get('/contact', function(req, res) {
    res.sendFile( path + "contact.html" );
});

module.exports = router;