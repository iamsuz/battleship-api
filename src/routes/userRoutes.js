const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/create-user", userController.createUser);

module.exports = router;
