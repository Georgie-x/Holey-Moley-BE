const express = require("express")
const app = express()
const cors = require("cors")
const { getAllUsers, patchUser, postUser } = require("./controllers/users.controller")
const { getAllShows, getShowById} = require("./controllers/shows.controller")
const { getCharacters, get5char} = require("./controllers/chars.controller")
const { getAllResults, getResultsByUser} = require("./controllers/results.controller")


app.use(cors())

app.use(express.json())

app.get('/api/users/', getAllUsers)
app.patch('/api/users/:username', patchUser)
app.post('/api/users/', postUser)

app.get('/api/characters', getCharacters)
app.get('/api/characters/:show_id/:num', get5char)

app.get('/api/shows/', getAllShows)
app.get('/api/shows/:show_id', getShowById)

app.get('/api/results', getAllResults)
app.get('/api/results/:username', getResultsByUser)





module.exports = app
 
