// inicializacion de las variables de entorno
import "dotenv/config"
// modulos internos
import { index_router } from "./router/routes.js"
import { auth_router }  from "./router/auth.routes.js"
import { conn }   from "./models/mysql.connection.js"
// modulos
import express          from "express"
import cors             from "cors"
// variables de entorno
const port     = process.env.PORT
const url      = process.env.URL_DEV
// inicializacion de la app
const app = express()

// middlewares:
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(index_router)
app.use(auth_router)

// Inicio del servidor:
app.listen(port, () => {
  console.log(`Server running on ${url}:${port} and connected to database`)
  // conn.getConnection((err) => {
  //   if(err) throw err
  // })
})