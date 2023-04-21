import {  Router  }         from "express"
import { user_controller }  from "../controllers/user.controller.js"
const user_router = Router()

const USER_PATH           = process.env.USER_PATH
const REGISTER_USER_PATH  = process.env.REGISTER_USER_PATH

user_router.get(USER_PATH, user_controller.getUser)

export { user_router }