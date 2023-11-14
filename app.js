const express = require("express")
const app = express()
const cors = require("cors")
const { exists } = require("fs")

const { getAllUsers } = require("./controllers/getAllUsers.controller")
const { patchUser } = require("./controllers/patchUser.controller")
const { addNewUser } = require("./controllers/addNewUser.controller")
const { getAllShows, getShow} = require("./controllers/shows.controller")
const { getCharacters } = require("./controllers/getCharacters.controller")
const { get5char } = require("./controllers/get5char.controller")




app.use(cors())

app.use(express.json())

app.get('/api/users/', getAllUsers)
app.get('/api/characters', getCharacters)
app.get('/api/characters/:show_id/:num', get5char)

app.get('/api/shows/', getAllShows)
app.get('/api/shows/:show_id', getShow)
// app.get('/api/shows/:show_id/characters')


app.patch('/api/users/:username', patchUser)


app.post('/api/users/:username', addNewUser)
app.post('/api/users/:username', addNewUser)


module.exports = app
 
