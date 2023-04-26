import { Router }             from "express"
import { course_controller }  from "../controllers/courses.controller.js"

const courses_router = Router()

const COURSES_PATH          = process.env.COURSES_PATH
const COURSE_FILTER_PATH    = process.env.COURSE_FILTER_PATH
const NEW_COURSE_PATH       = process.env.NEW_COURSE_PATH

courses_router.get(COURSES_PATH, course_controller.getCourses)
courses_router.get(COURSE_FILTER_PATH, course_controller.getCoursesByFilter)
courses_router.post(NEW_COURSE_PATH, course_controller.registerCourse)

export { courses_router }
