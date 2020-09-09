var express = require('express');
var router = express.Router();

const indexCtrl = require("../controllers/index.js");

/* GET home page. */
router.get('/', indexCtrl.getHomePage);

module.exports = router;
