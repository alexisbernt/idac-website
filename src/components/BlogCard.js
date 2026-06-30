import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Link to={post.link} className="blog-card-link">
      <article className="blog-card">
        <img
          src={process.env.PUBLIC_URL + post.image}
          alt={post.title}
          className="blog-card-image"
        />

        <p className="blog-category">{post.category}</p>

        <h2 className="blog-card-title">{post.title}</h2>

        <p className="blog-card-description">
          {post.description}
        </p>

        <span className="blog-read-time">
          {post.readTime}
        </span>
      </article>
    </Link>
  );
}

export default BlogCard;