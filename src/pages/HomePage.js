import Navbar from "../components/Navbar";
import FeaturedArticles from "../components/FeaturedArticles";
import TreasureMap from "../components/TreasureMap";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <FeaturedArticles />

      <hr className="section-divider" />

      <section className="home-content">
        <h2>The Journey Into Identity &amp; Technology</h2>
        <p>
          From technology audits and assessments to IAM,
          conferences, podcasts, certifications, and the
          unexpected opportunities that shaped my career.
        </p>
      </section>

      <TreasureMap />

      <Footer />
    </>
  );
}

export default HomePage;