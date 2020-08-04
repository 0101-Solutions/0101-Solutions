var express = require('express');
var router = express.Router();

const indexCtrl = require("../controllers/index.js");

/* GET home page. */
router.get('/', indexCtrl.getHomePage);

router.get('/404', indexCtrl.get404);
router.get('*', indexCtrl.redirect404);


module.exports = router;
