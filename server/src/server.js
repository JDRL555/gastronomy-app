require('dotenv').config()

// 1.- Importar las Dependencias:
const express  = require('express')
const app      = express()
const port     = process.env.PORT
const url      = process.env.URL
const parser   = require('body-parser')
const bcrypt   = require('bcrypt')
const fetch    = require('node-fetch')
const jwt      = require('jsonwebtoken')

const io       = require('socket.io')


// 2.- Crear los Middlewares:
app.use(parser.urlencoded({extended: true}))
//app.use(express.static('views'))


// 3.- Configuración del Servidor:
app.listen(port, function(){
    
    console.log(`Server running an ${url+port}`)

})


// 4.- Rutas y Funciones:
app.get(process.env.ROOT_PATH1, function(req, res){

    res.send("Hola Mundo XD")

})
