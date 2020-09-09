var express = require('express');
var router = express.Router();

const indexCtrl = require("../controllers/error.js");

/* GET Error page. */
router.get('/404', indexCtrl.get404);
router.get('*', indexCtrl.redirect404);


module.exports = router;
