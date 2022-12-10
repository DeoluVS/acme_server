const express = require("express")
const router = new express.Router()
const {Welcome} = require("../../Controller/Welcome/WelcomeController")

router.get("/Welcome", Welcome)

module.exports = router