const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/homeController");
router.use("/show", homeController.show);
router.use("/", homeController.index);

module.exports = router;
