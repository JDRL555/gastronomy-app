import { validate }   from "../controllers/functions.controller.js"
import { Database }   from "../database/mysql.database.js"
import bcrypt         from "bcrypt"
import { conn }       from "../models/mysql.connection.js"

const auth_controller = {}

auth_controller.register = async (req, res) => {
  const data = req.body
  let response = validate(data, ["name", "last_name", "email", "phone", "password", "confirm"])

  if(response.empty_values){
    return res.status(response.status).json(response)
  }

  data.password = await bcrypt.hash(data.password, 10)

  const mysql = new Database()

  const query = mysql.create("insert", {
    name: "users",
    values: data
  })

  response.data = await conn.query(query)

  return res.status(response.status).json({response, query})
}

auth_controller.login = async(req, res) => {
  const data = req.body
  let response = validate(data, ["email", "password"])

  if(response.invalid_fields || response.empty_values){
    return res.status(response.status).json(response)
  }

  const mysql = new Database()
  let query = mysql.read("select", {
    name: "users",
    columns: "*",
    condition: `email = '${data.email}'`
  })
  const email_query = await conn.query(query)

  if(!email_query[0][0]){
    response.status = 400
    response.message = "ERROR: invalid email"
    return res.status(response.status).json(response)
  }

  const is_correct_password = await bcrypt.compare(data.password, email_query[0][0].password)
  
  if(!is_correct_password){
    response.status = 400
    response.message = "ERROR: invalid password"
    return res.status(response.status).json(response)
  }

  response.data = `Welcome ${email_query[0][0].name}!`

  res.status(response.status).json(response)
}

export {auth_controller}