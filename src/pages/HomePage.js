import Navbar from "../components/Navbar";
import FeaturedArticles from "../components/FeaturedArticles";
// import TreasureMap from "../components/TreasureMap";
// import YouTubeVideos from "../components/YouTubeVideos";
import RecentVideos from "../components/RecentVideos";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <FeaturedArticles />

      <hr className="section-divider" />

      <section className="info-section">
        <div className="info-badge">Breaking down relevant technical things so you know more</div>
        <h2>Your Online 'Cyber Club'</h2>
        <p>
          Cybersecurity, Artificial Intelligence, and
          Identity and Access Management News
        </p>
      </section>

      <hr className="section-divider" />

      {/* Latest Videos */}
      <RecentVideos />

      <hr className="section-divider" />

      <Footer />
    </>
  );
}

export default HomePage;