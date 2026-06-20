import Navbar from "../components/Navbar";
import TreasureMap from "../components/TreasureMap";
import Footer from "../components/Footer";
// import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <TreasureMap />

      <section className="home-content">
        <h2>The Journey Into Identity & Technology</h2>

        <p>
          From technology audits and assessments to IAM,
          conferences, podcasts, certifications, and the
          unexpected opportunities that shaped my career.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;