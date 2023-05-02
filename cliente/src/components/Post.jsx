import "../styles/Post.css"
export default function Post({title, description, img}) {
  return (
    <div className="post">
      <img src={img} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
