import "../styles/Posts.css"

export default function Posts({children}) {
  
  const moveToRight = () => {
    const carrusel  = document.querySelector(".posts_carrusel_container")
    if(!carrusel.style.left){
      carrusel.style.left = "0vw"
      console.log(`Antes era: ${carrusel.style.left}`)
    }
    switch(carrusel.style.left){
      case "0vw":
        carrusel.style.left = "-100vw"
        break
      case "-100vw":
        carrusel.style.left = "-200vw"
        break
      case "-200vw":
        carrusel.style.left = "0vw"
        break
      default:
        carrusel.style.left = "0vw"
        break
    }
    console.log(`Ahora es: ${carrusel.style.left}`)
  }

  const moveToLeft = () => {
    const carrusel  = document.querySelector(".posts_carrusel_container")
    if(!carrusel.style.left){
      carrusel.style.left = "0vw"
      console.log(`Antes era: ${carrusel.style.left}`)
    }
    switch(carrusel.style.left){
      case "0vw":
        carrusel.style.left = "-200vw"
        break
      case "-100vw":
        carrusel.style.left = "0vw"
        break
      case "-200vw":
        carrusel.style.left = "-100vw"
        break
      default:
        carrusel.style.left = "0vw"
        break
    }
    console.log(`Ahora es: ${carrusel.style.left}`)
  }

  return (
    <div className="posts_container">
      <div className="arrow_right" onClick={moveToRight}>{">"}</div>
      <div className="arrow_left" onClick={moveToLeft}>{"<"}</div>
      <div className="posts_carrusel_container">
        {children}
      </div>
    </div>
  )
}
