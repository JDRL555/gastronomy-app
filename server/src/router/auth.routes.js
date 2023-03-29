import { auth_controller }  from "../controllers/auth.controller.js"
import {Router} from "express"

const auth_router = Router()
const REGISTER_PATH = process.env.REGISTER_PATH
const LOGIN_PATH    = process.env.LOGIN_PATH

auth_router.post(REGISTER_PATH, auth_controller.register)
auth_router.post(LOGIN_PATH, auth_controller.login)

export {auth_router}