import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <h1>About</h1>

        <p>
          This blog follows a technology journey through
          identity security, podcasts, conferences,
          opportunities, and lessons learned.
        </p>

        <p>
          Think of it as a modern digital treasure map
          documenting the twists and turns along the way.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;