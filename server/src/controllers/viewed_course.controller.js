import { Database } from "../database/mysql.database.js"
import { conn }     from "../models/mysql.connection.js"
import jwt          from "jsonwebtoken"

const viewed_controller = {}
const mysql = new Database()

viewed_controller.registerViewedCourses = async (req, res) => {
  try {
    let response = {
      msg: "ERROR",
      status: 400,
      data: []
    }
    const user_token  = req.cookies.token
    if(!user_token){
      res.status(200).redirect("/")
    }
    const {id}          = jwt.verify(user_token, process.env.SECRET_KEY)
    const course_id     = req.body
    
    const query = mysql.create("insert", {
      name: "viewed_courses",
      values: {id, course_id}
    })
    response.data = await conn.query(query)
    response.data = response.data[0]
    
    if(!response.data){
      return res.status(response.status).json(response)
    }
    return res.status(response.status).json(response)
  } catch (error) {
    return res.status(400).json(error)
  }
}

viewed_controller.changePercentage = async (req, res) => {
  try {
    let response = {
      msg: "ERROR",
      status: 400,
      data: {}
    }
    const {course_id, newPercentage}  = req.body
    if(newPercentage === 100){
      const query = mysql.read("select", {
        name: "viewed_course",
        columns: ["progress_course", "completed_course"],
        newValues: [100, true],
        condition: `id_course = ${course_id}`
      })
      const percentage = await conn.query(query)
      if(percentage != 100){
        const query = mysql.update("update", {
          name: "viewed_courses",
          columns: "completed_course"
        })
        response.data = await conn.query(query)
        response = {
          msg: "Course completed successfully!",
          status: 200
        }
        return res.status(response.status).json(response)
      }else{
        response = {
          msg: "The course's already completed!",
          status: 200
        }
        return res.status(response.status).json(response)
      }
    }

    const query = mysql.update("update", {
      name: "viewed_courses",
      columns: "progress_course",
      newValues: newPercentage,
      condition: `id_course = ${course_id}`
    })
    response.data = await conn.query(query)
    response.data = response.data[0]

    if(!response.data){
      return res.status(response.status).json(response)
    }

    response = {
      msg: "Updated successfully!",
      status: 200
    }
    return res.status(response.status).json(response)

  } catch (error) {
    return res.status(400).json(error)
  }
}

viewed_controller.getViewedCourses = async (req, res) => {
  let response = {
    msg: "There's no viewed courses for that user",
    status: 200,
    data: []
  }

  const query = mysql.read("select", {
    name: "viewed_courses",
    columns: "*"
  })

  response.data = await conn.query(query)
  response.data = response.data[0]

  if(!response.data.length){
    return res.status(response.status).json(response)
  }
  return res.status(response.status).json(response)
}

export { viewed_controller }