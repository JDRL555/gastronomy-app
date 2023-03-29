import {Database} from "../database/mysql.database.js"
import jwt from "jsonwebtoken"

const user_controller = {}

user_controller.user = (req, res) => {
  
  try {
    const user_token  = req.cookies.token
    if(!user_token){
      res.status(200).send("There's no an active session!")
    }
    const user        = jwt.verify(user_token, process.env.SECRET_KEY) 
    
    res.status(200).json({message: `Welcome ${user.name}`, user})

  } catch (error) {
    res.status(400).json({message: "ERROR: you don't have access to this site!"})
  }

}

export { user_controller }