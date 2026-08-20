import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";

function Blog6() {
  return (
    <>
      <Navbar />

      <article className="blog-post">

        {/* ── Breadcrumb ── */}
        <p className="blog-breadcrumb">
          <span>Identity</span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-section">Community</span>
        </p>

        {/* ── Headline & dek ── */}
        <h1 className="blog-headline">
          A Quick Guide to Navigating IDPro Connect on Slack
        </h1>

        <p className="blog-dek">
          Where to post, what to expect, and how the channel really works
        </p>

        {/* ── Share row ── */}
        <div className="blog-meta-row">
          <button
            className="blog-share-btn"
            onClick={() =>
              navigator.share?.({ title: document.title, url: window.location.href })
            }
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
        </div>

        {/* ── Hero image ── */}
        <figure className="blog-hero">
          <img
            src={`${process.env.PUBLIC_URL}/slack.png`}
            alt="Screenshot-style illustration of the IDPro Connect Slack workspace"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("blog-hero--empty");
            }}
          />
          <figcaption className="blog-hero-caption">
            ILLUSTRATION: IDPRO CONNECT WORKSPACE OVERVIEW
          </figcaption>
        </figure>

        {/* ── Date + read time ── */}
        <p className="blog-dateline">Jul 21st 2026 &nbsp;|&nbsp; 3 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          <p className="blog-drop-cap">
            If you've just joined IDPro Connect, the Slack workspace for the
            identity and access management community, the sheer volume in{" "}
            <strong>#general</strong> can feel like showing up to a
            conference mid-keynote. Someone's asking about passwordless
            rollouts on non-persistent VDI, someone else just announced a
            book, and a third person is quietly campaigning to get rid of
            reCAPTCHA on the IDPro website. [It's less a single conversation
            and more several conversations wearing the same channel as a
            trench coat.] Once you learn the rhythm, though, it's one of the
            more useful rooms in identity.
          </p>

          <p>
            The trick is knowing that <strong>#general</strong> is really two
            channels stacked on top of each other. One half is technical
            crowdsourcing: practitioners posting real production problems —
            FIDO2 key resets, blocking failed Azure CLI logins, SailPoint
            migrations — and getting answers from people who've actually hit
            the same wall. [Think of it as office hours that never end and
            nobody's on the clock.] The other half is community
            housekeeping: conference meetups like Identiverse and EIC,
            "Identibeer" socials in whatever city someone happens to be in,
            award nominations, newsletter calls, and new-member introductions.
            Threads are your friend here — a top-level post is often just the
            headline, and the real advice lives in the replies, so it's
            worth clicking in rather than skimming the main feed.
          </p>

          <p>
            A few habits will make the workspace much easier to navigate.
            First, check for a topic-specific channel before posting in{" "}
            <strong>#general</strong> — things like{" "}
            <strong>#iga</strong>, <strong>#identiverse</strong>, and{" "}
            <strong>#identibeer</strong> exist precisely so the firehose
            doesn't swallow every niche conversation. Second, if you're
            sharing research, a framework, or an article for feedback [as
            people do here constantly], say so explicitly and ask a specific
            question — the community is generous with feedback but responds
            best to a clear ask rather than a general "thoughts?" Third,
            don't be shy about introducing yourself the way many others do
            after meeting IDPro at a conference; it's a genuinely welcoming
            crowd, reactions and all. Get those three habits down and{" "}
            <strong>#general</strong> stops feeling like noise and starts
            feeling like exactly what it is: a working identity community
            that happens to live in Slack.
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog6;