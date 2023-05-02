import "../styles/Course.css"

export default function Course({img, title, description}) {
  const words = description.split(" ")
  if(words.length >= 20){
    words.splice(19)
  }
  return (
    <div className="course">
      <img src={img} />
      <div className="course_info">
        <h2>{title}</h2>
        {
          description.split(" ").length >= 20 
          ? 
          <>
            <p>{words.join(" ")}<a href=""> ... ver mas</a></p>
          </>
          :
            <p>{description}</p>
        }
      </div>
    </div>
  )
}
