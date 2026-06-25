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
          Follow the winding path of a technology risk consulting associate turned identity access management enthusiast. 
        </p>
      </section>

      <TreasureMap />

      <Footer />
    </>
  );
}

export default HomePage;