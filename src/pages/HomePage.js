import Navbar from "../components/Navbar";
import TreasureMap from "../components/TreasureMap";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <TreasureMap />

      <section className="home-content">
        <h2>A Modern Technology Journey</h2>

        <p>
          Identity, security, technology, podcasts,
          conferences, and the unexpected paths
          that connect them all.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;