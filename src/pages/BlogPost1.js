import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";

// Swap this import for your real illustration when ready.
// Place the image in src/assets/ and update the path below.
// import placeholderImg from "../assets/placeholder-illustration.jpg";

function Blog1() {
  return (
    <>
      <Navbar />

      <article className="blog-post">

        {/* ── Breadcrumb ── */}
        <p className="blog-breadcrumb">
          <span>Identity & Security</span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-section">Identiverse</span>
        </p>

        {/* ── Headline & dek ── */}
        <h1 className="blog-headline">
          How the Journey into Identity Access Management Begins
        </h1>

        <p className="blog-dek">
          Partial luck, partial hard work — and the audacity to ask
        </p>

        {/* ── Share row ── */}
        <div className="blog-meta-row">
          <button
            className="blog-share-btn"
            onClick={() => navigator.share?.({ title: document.title, url: window.location.href })}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Share
          </button>
        </div>

        {/* ── Hero image ── */}
        <figure className="blog-hero">
          <img
            src={placeholderImg}
            alt="Illustration for the Identiverse article"
            onError={(e) => { e.target.style.display = "none"; e.target.parentElement.classList.add("blog-hero--empty"); }}
          />
          <figcaption className="blog-hero-caption">
            ILLUSTRATION: PLACEHOLDER
          </figcaption>
        </figure>

        {/* ── Date + read time ── */}
        <p className="blog-dateline">Jun 22nd 2026 &nbsp;|&nbsp; 7 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          <p className="blog-drop-cap">
            It is an electrifying time to enter the world of Identity Access
            Management. At least, that is my sentiment after attending
            Identiverse in Las Vegas, Nevada this past week.
          </p>

          <p>
            How I got to Identiverse is a peculiar story. Partial luck, partial
            hard work, some would say partial stupidity. But I got there.
          </p>

          <p>
            While at Identiverse I had the pleasure of dining with a team out
            of Brazil and a team out of Germany. One of the Brazilians
            introduced me to a term, <em>"cara de pau."</em> I looked it up
            later and the full term is <em>"ter a cara de pau de perguntar"</em>{" "}
            — which means to have the nerve, the audacity, to ask.
          </p>

          <p>
            I'm a person who sometimes reads through firm-wide newsletters.
            Maybe it's my love for journalism, maybe it's my brain
            procrastinating, but I do love a good firm newsletter. Through one
            of those newsletters I was introduced to a podcast run by two
            directors at the consulting firm I work for. These directors helm a
            podcast called <em>Identity At The Center.</em>
          </p>

          <p>
            Learning it was a cybersecurity-related podcast, I decided to
            listen and was serendipitous enough to discover Identity Access
            Management.
          </p>

          <p>
            The voices of Jeff Steadman and Jim McDonald stick with you. They
            are distinct. They deliver knowledge through questions. I figured I
            could simultaneously learn a subject relevant to my work and absorb
            what it means to be a great consultant. So I listened. Then I
            listened more. Then I listened to twenty episodes within a
            seven-day span. I'd gone ballistic in the art of learning Identity
            Access Management through a podcast.
          </p>

          <p>
            Maybe it was the connection of sharing the same firm. Maybe it was
            the obsession that inevitably takes hold when you discover something
            new. Either way, I was hooked.
          </p>

          <p>
            So I listened more. I studied more. In Identity Access Management
            (IAM), there is a tremendous amount to learn. I started Googling,
            running AI searches, trying to reconcile IAM with my day-to-day
            work.
          </p>

          <p>
            Then I reached out. I drafted one, two, four emails articulating my
            enthusiasm for the podcast and my affiliation with them as a fellow
            associate at the firm. I even sent the draft to my dad to proofread
            before dispatching it. I crossed my fingers, hoping they'd respond
            warmly to my fandom. To my great fortune, they did. Quickly.
          </p>

          <p>
            Jeff was generous, offering me a meeting with both of them. I
            scheduled it, then went and listened to another episode of the
            podcast.
          </p>

          <p>
            Then came the episodes from Berlin. Jeff and Jim were fresh off an
            Identity Access Management conference abroad and ramping up for the
            next one: Identiverse in Las Vegas. They previewed it with what I
            would describe as reverence, describing it as one of the premier
            IAM conferences in the world, and even advertised a discount code
            on the show. They mentioned that many of their most distinguished
            guests would be in attendance.
          </p>

          <p>
            Once back from Berlin, we met virtually. My heart felt like it was
            going to fall out of my butt. I could feel myself speedtalking.
            They were gracious, patient, and kind, and we ended up having a
            good conversation. We discussed how context is paramount when it
            comes to defining Identity. At the end of the meeting I asked how I
            could learn more.
          </p>

          <p>
            They spoke about certification, IDPro as a valuable resource, and
            conferences as a vehicle for immersion.
          </p>

          <p>The gears started turning.</p>

          <p>Jeff and Jim would be at Identiverse the following week.</p>

          <p>
            We had to end the meeting, already two minutes over, which in the
            corporate world signals either a tremendous success or a spectacular
            failure.
          </p>

          <p>
            I sent a follow-up. And this is where <em>"cara de pau"</em>{" "}
            re-enters the story. In that email, I mentioned that if there was
            any conceivable way I could get to Identiverse, to please let me
            know.
          </p>

          <p>
            I shot my shot. Rolled the dice. Tested my luck.
          </p>

          <p>Jeff replied. He would see what he could do.</p>

          <p>
            Giddy like a high schooler headed to prom, I messaged my direct
            bosses: <em>"Dear Boss #1 and Boss #2, I know this is a long shot
            but I would love to go to this conference in four days in Las Vegas.
            Any way I can go? Sincerely — Your delusional associate."</em>
          </p>

          <p>Twenty minutes later I got a call. Unlikely. But kind.</p>

          <p>Two hours later I got another message: <em>"This is cool."</em></p>

          <p>
            Behind the scenes, my bosses worked on top of the work they already
            had, advocating to make this opportunity a reality for me.
          </p>

          <p>Let me tell you, I am profoundly thankful.</p>

          <p>
            I am thankful that the higher-ups within my firm gave me a chance
            so that the stars could align and I could step into the universe of
            Identity Access Management. As dorky as that sounds, I am genuinely
            grateful.
          </p>

          <p className="blog-sign-off">And that is how the journey begins.</p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog1;