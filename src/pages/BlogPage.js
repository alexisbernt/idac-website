import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/blogPosts";
import "../styles/BlogPage.css";

function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="blog-page">
        <div className="blog-container">
          <h1 className="blog-title">The Journey</h1>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogPage;