import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/TermsAndConditions.css";

function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <section className="page-section terms-section">
        <h1>Terms and Conditions</h1>
        <p className="terms-updated">Last Updated: July 24, 2026</p>

        <p>
          Welcome to IAM LEARNING a Technology Blog. By
          submitting your email address to subscribe to our newsletter, blog
          updates, or related communications, you agree to the following
          Terms and Conditions. Please read them carefully before signing
          up.
        </p>

        <div className="terms-block">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By providing your email address and subscribing to our mailing
            list, you acknowledge that you have read, understood, and agree
            to be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not
            agree with any part of these terms, please do not subscribe.
          </p>
        </div>

        <div className="terms-block">
          <h2>2. What You're Signing Up For</h2>
          <p>By subscribing, you consent to receive:</p>
          <ul>
            <li>Blog post updates and new content notifications</li>
            <li>
              Newsletters covering Cybersecurity, Technology, and Identity
              and Access Management topics
            </li>
            <li>
              Occasional announcements about events, resources, or site
              updates
            </li>
          </ul>
          <p>
            We will not use your email address for purposes beyond what is
            described here without your explicit consent.
          </p>
        </div>

        <div className="terms-block">
          <h2>3. Email Frequency</h2>
          <p>
            We aim to send communications at a reasonable frequency (e.g.,
            weekly or upon new post publication). We do not sell, rent, or
            share your email address with third parties for marketing
            purposes.
          </p>
        </div>

        <div className="terms-block">
          <h2>4. Unsubscribing</h2>
          <p>You may unsubscribe from our mailing list at any time by:</p>
          <ul>
            <li>
              Clicking the "unsubscribe" link included at the bottom of
              every email, or
            </li>
            <li>
              Contacting us directly at{" "}
              <a href="mailto:alexisbernthal4@gmail.com">
                alexisbernthal4@gmail.com
              </a>
            </li>
          </ul>
          <p>
            Unsubscribing will stop future communications but does not
            delete previously sent emails from your inbox.
          </p>
        </div>

        <div className="terms-block">
          <h2>5. Data Collection and Use</h2>
          <p>
            Your email address is collected solely for the purpose of
            sending you the communications described above. We use a web-based platform to
            manage our mailing list. Your information is stored securely
            and is not shared with third parties except as necessary to
            operate our email service.
          </p>
          <p>
            For more details on how we collect, use, and protect your data,
            please review Section 2.
          </p>
        </div>

        <div className="terms-block">
          <h2>6. Age Requirement</h2>
          <p>
            By subscribing, you confirm that you are at least 16 years of
            age (or the minimum legal age in your jurisdiction to consent
            to data collection). We do not knowingly collect email
            addresses from children.
          </p>
        </div>

        <div className="terms-block">
          <h2>7. Accuracy of Information</h2>
          <p>
            You agree to provide a valid and accurate email address. We are
            not responsible for undelivered communications due to
            incorrect or outdated email information provided by you.
          </p>
        </div>

        <div className="terms-block">
          <h2>8. No Guarantee of Content</h2>
          <p>
            While we strive to provide accurate, timely, and valuable
            content related to Cybersecurity, Technology, and Identity and
            Access Management, we make no guarantees regarding the
            completeness, accuracy, or applicability of the information
            shared. Content is provided for informational purposes only
            and should not be considered professional or legal advice.
          </p>
        </div>

        <div className="terms-block">
          <h2>9. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and
            Conditions at any time. Continued subscription to our mailing
            list after changes are posted constitutes your acceptance of
            the revised terms. We encourage you to review this page
            periodically.
          </p>
        </div>

        <div className="terms-block">
          <h2>10. Termination</h2>
          <p>
            We reserve the right to remove any subscriber from our mailing
            list at our discretion, including in cases of abuse, invalid
            email addresses, or violation of these terms.
          </p>
        </div>

        <div className="terms-block">
          <h2>11. Limitation of Liability</h2>
          <p>
            I AM LEARNING shall not be held liable for any damages
            resulting from the use of, or inability to use, our email
            communications, including but not limited to loss of data,
            loss of profits, or other damages arising from your
            subscription.
          </p>
        </div>

        <div className="terms-block terms-block--contact">
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions,
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:alexisbernthal4@gmail.com">
              alexisbernthal4@gmail.com
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a href="https://alexisbernthal.com">alexisbernthal.com</a>
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      <Footer />
    </>
  );
}

export default TermsAndConditions;