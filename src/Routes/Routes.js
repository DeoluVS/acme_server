const express = require("express")
const router = new express.Router()

router.use("/", require("./Welcome/WelcomeRoute"))

module.exports = router