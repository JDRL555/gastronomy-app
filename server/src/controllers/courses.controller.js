import { validate }   from "../controllers/functions.controller.js"
import { Database }   from "../database/mysql.database.js"
import { conn }       from "../models/mysql.connection.js"

const course_controller = {}
const mysql = new Database()

course_controller.registerCourse = async (req, res) => {
  try {
    const data = req.body
    let response = validate(data, ["name", "description", "category", "hours", "price", "type"])
  
    if(response.empty_values){
      return res.status(response.status).json(response)
    }
  
    const query = mysql.create("insert", {
      name: "courses",
      values: data
    })
  
    response.data = await conn.query(query)
    response.data = response.data[0]
  
    return res.status(response.status).json({response, query})
  } catch (error) {
    return res.status(400).json(error)
  }
}

course_controller.getCourses = async(req, res) => {
  let response = {
    msg: "There's no courses yet",
    status: 200,
    data: []
  }
  let query = mysql.read("select", {
    name: "courses",
    columns: "*"
  })

  response.data = await conn.query(query)
  response.data = response.data[0]

  if(response.data){
    response.msg = "Here's the courses"
    return res.status(response.status).json({response, query}) 
  }

  return res.status(response.status).json({response, query})  
}

course_controller.getCoursesByFilter = async (req, res) => {
  let response = {
    msg: `ERROR, courses not found by that ${filter}`,
    status: 400,
    data: null
  }
  
  const { filter, search } = req.body

  const query = mysql.read("select", {
    name: "courses",
    columns: "*",
    condition: `${filter} = '${search}'`
  })

  response.data = await conn.query(query)
  response.data = response.data[0]

  if(!response.data || !response.data.length) {
    return res.status(response.status).json(response)
  }
  return res.status(response.status).json(response)
}

export { course_controller }