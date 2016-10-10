var express = require("express");
var router = express.Router();
var ctrl = require("./chartsController");
router.get('/', ctrl.list);
router.post('/', ctrl.add);


module.exports = router;
