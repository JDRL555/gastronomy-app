// inicializacion de las variables de entorno
import "dotenv/config"
// modulos internos
import { index_router }   from "./router/routes.js"
import { auth_router }    from "./router/auth.routes.js"
import { user_router }    from "./router/user.routes.js"
import { courses_router } from "./router/courses.routes.js"
import { viewed_router }  from "./router/viewed_course.routes.js"
// modulos
import express            from "express"
import cors               from "cors"
import cookieParser       from "cookie-parser"
// variables de entorno
const port = process.env.PORT
const url  = process.env.URL_DEV
// inicializacion de la app
const app = express()
// middlewares:
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//uso de las rutas
app.use(index_router)
app.use(auth_router)
app.use(user_router)
app.use(courses_router)
app.use(viewed_router)
// Inicio del servidor:
app.listen(port, () => {
  console.log(`Server running on ${url}:${port} and connected to database`)
})