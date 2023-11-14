const express = require("express")
const app = express()
const cors = require("cors")
const { exists } = require("fs")

const { getAllUsers } = require("./controllers/getAllUsers.controller")
const { patchUser } = require("./controllers/patchUser.controller")
const { addNewUser } = require("./controllers/addNewUser.controller")
const { getAllShows} = require("./controllers/shows.controller")
const { getCharacters } = require("./controller/getCharacters.controller")




app.use(cors())

app.use(express.json())

app.get('/api/users/', getAllUsers)
app.get('/api/characters', getCharacters)

app.patch('/api/users/:username', patchUser)

app.post('/api/users/:username', addNewUser)




app.get('/api/shows/', getAllShows)




app.post('/api/users/:username', addNewUser)


module.exports = app
 
