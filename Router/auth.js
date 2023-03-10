const express = require("express");
const { register, login, getUser } = require("../Controller/auth");
const { createLink, getLink, getOriginal } = require("../Controller/link");

const router = express.Router();

router.post("/enter", login);
router.get("/", getUser);
router.post("/register", register);

module.exports = router;
