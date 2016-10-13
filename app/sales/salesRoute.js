var express = require("express");
var router = express.Router();
var ctrl = require("./salesController");
router.get("/", ctrl.list);
router.post("/", ctrl.add);
router.get("/group", ctrl.group);

module.exports = router;
