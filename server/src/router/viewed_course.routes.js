import { Router }             from "express"
import { viewed_controller }  from "../controllers/viewed_course.controller.js"

const viewed_router = Router()

const VIEWED_COURSES_PATH     = process.env.VIEWED_COURSES_PATH
const NEW_VIEWED_PATH    = process.env.NEW_VIEWED_PATH
const CHANGE_PERCENTAGE_PATH  = process.env.CHANGE_PERCENTAGE_PATH

viewed_router.get(VIEWED_COURSES_PATH, viewed_controller.getViewedCourses)
viewed_router.post(NEW_VIEWED_PATH, viewed_controller.registerViewedCourses)
viewed_router.post(CHANGE_PERCENTAGE_PATH, viewed_controller.changePercentage)

export { viewed_router }