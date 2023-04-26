import Navbar   from "./components/Navbar"
import Content  from "./components/Content"
import Header   from "./components/Header"
import Posts    from "./components/Posts"
import Post     from "./components/Post"
import img      from "./public/img/reposteria.jpg"
import "./styles/index.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Header />
        <Posts>
          <Post img={img} title="El webo mio en venta" description="omg" />
          <Post img={img} title="Comida gratis" description="ai dise gratis" />
          <Post img={img} title="No se" description="xd" />
        </Posts>
      </Content>
      <footer>
          <p className="piedepagina">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur labore dicta dolorem praesentium, ipsam earum reiciendis accusamus iusto amet? Quisquam reprehenderit dolorem quod. Ex esse eius ducimus provident doloribus blanditiis?</p>
      </footer>
    </>
  )
}
