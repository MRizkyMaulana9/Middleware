const userController = require("../controllers/user-controller");
const userLogger = require("../middlewares/logger");
const express = require("express");

const router = express.Router();
const userAuth = require("../middlewares/user-auth");

router.get("/", userLogger, userController.getUser);
router.get("/:id", userAuth, userLogger, userController.getUserByIndex);

module.exports = router;
