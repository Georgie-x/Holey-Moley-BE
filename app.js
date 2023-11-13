const express = require("express")
const app = express()
const cors = require("cors")
const { exists } = require("fs")



app.use(cors())

app.use(express.json())


