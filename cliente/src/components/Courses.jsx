import "../styles/Courses.css"

export default function Courses({children}) {
  return (
    <div className="course_container">
      <h1>Cursos</h1>
      <div className="courses_container">
      {children}
      </div>
    </div>
  )
}
