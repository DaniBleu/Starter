const express = require("express")
const { success } = require("./helper")
let pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send("hello les developpeur back"))

app.get('/api/pokemons1', (req, res) => {
    res.send(`il y'a ${pokemons.length} Pokemon dans le pokedex pour le moment`)
   })

app.get('/api/pokemons', (req, res)=>{
    const message = "U pokemon a bien ete trouve"
    res.json(success(message, pokemons)) 
})



app.listen(port, ()=>console.log(`notre application s'ouvre sur http://localhost ${port}`))
