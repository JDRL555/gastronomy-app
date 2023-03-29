import { Router }           from "express"
import { index_controller } from "../controllers/controllers.js"

const index_router = Router()
const ROOT_PATH = process.env.ROOT_PATH

index_router.get(ROOT_PATH, index_controller.index)

export {index_router}