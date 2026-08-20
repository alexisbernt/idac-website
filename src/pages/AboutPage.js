import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AboutPage.css";
import TreasureMap from "../components/TreasureMap";

// EmailJS credentials, pulled from environment variables so they never
// get committed to git. See .env.local (gitignored) for actual values.
// Note: the public key is still visible in the shipped JS bundle once
// built — that's expected/safe for EmailJS. 
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function AboutPage() {
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeUpdates, setAgreeUpdates] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Enter your email address.");
      return;
    }
    if (!agreeTerms) {
      setErrorMessage("You need to agree to the Terms & Conditions to continue.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subscriber_email: email,
          agreed_to_updates: agreeUpdates ? "yes" : "no",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setEmail("");
      setAgreeTerms(false);
      setAgreeUpdates(false);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong sending that. Try again in a moment.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="page-section about-section">
        <h1>print("Hello World!")</h1>

        <div className="about-flex">
          <div className="about-text">
            <p>
              Welcome to Lexi's Cyber Club: A Technology Blog By Alexis Bernthal! This is where technical things get explained! This space covers all things from identity and access management, to artificial intelligence, and cybersecurity. 
              The goal of this blog is to give you relevant, fast, and interesting insights so you know more. 
              Become a part of Cyber Club by entering your email below.
            </p>
            {/* I'm sending a *virtual hug* to all the tech enthusiasts out there who are navigating this complex landscape. */}
          </div>

          <img
            src="pro-head-2026.png"
            alt="Description of image"
            className="about-image"
          />
        </div>
        </section>

      <section className="newsletter-section">
        <div className="newsletter-card">
          <h2 className="newsletter-heading">
            Join Cyber Club!
          </h2>
          <p className="newsletter-subtext">
            Sign up to access free materials and join the club. No spam, just the good stuff: 
            Insights, stories, trending tech news, conference/event updates.
            Once a week maximum, and you can unsubscribe anytime.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
            />

            <label className="newsletter-checkbox-row">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={status === "sending"}
              />
              <span>
                By creating an account, you agree to our{" "}
                <a href="/#/terms-conditions">Terms &amp; Conditions</a> and{" "}
                <a href="/#/terms-conditions">Privacy Policy</a>.
              </span>
            </label>

            <label className="newsletter-checkbox-row">
              <input
                type="checkbox"
                checked={agreeUpdates}
                onChange={(e) => setAgreeUpdates(e.target.checked)}
                disabled={status === "sending"}
              />
              <span>
                I agree to receive updates and exclusive offers. I can opt
                out at any time.
              </span>
            </label>

            {errorMessage && (
              <p className="newsletter-message newsletter-message--error">
                {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className="newsletter-message newsletter-message--success">
                You're subscribed. Check your inbox to confirm.
              </p>
            )}

            <button
              type="submit"
              className="newsletter-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Submitting…" : "Create account"}
            </button>
          </form>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="home-content">
              <h2>The Map To Cybersecurity &amp; Technology</h2>
              <p>
                Learn advancements in artificial intelligence, identity and access management, cybersecurity, and more through Lexi's Cyber Club. 
                Here’s my digital learning map so far. Start yours today by joining 50+ and counting! 
              </p>
            </section>
      
            <TreasureMap />

      <Footer />
    </>
  );
}

export default AboutPage;