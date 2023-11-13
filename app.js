const express = require("express")
const app = express()
const cors = require("cors")
const { exists } = require("fs")
const { getAllUsers } = require("./controller/getAllUsers.controller")
const { patchUser } = require("./controller/patchUser.controller")




app.use(cors())

app.use(express.json())

app.get('/api/users/', getAllUsers)
app.post('/api/users/:username', patchUser)