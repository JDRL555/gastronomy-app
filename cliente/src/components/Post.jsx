import "../styles/Post.css"

export default function Post({img, title, description}) {
  return (
    <div className="post">
      <img src={img} />
      <div className="post_info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
