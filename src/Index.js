const express = require('express')
const colors = require('colors')
const app = express()
const cors = require("cors")
const router = require("./Routes/Routes")
app.use(express.json())

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {console.log(colors.blue("\n[+] App is running locally on http://localhost:" + PORT))}) 