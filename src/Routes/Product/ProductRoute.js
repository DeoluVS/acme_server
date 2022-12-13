const express = require("express")
const router = new express.Router()
const {Products} = require("../../Controller/Product/ProductController")

router.get("/Products", Products)

module.exports = router