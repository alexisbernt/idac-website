import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";
import "../styles/Blog4.css";

function Blog9() {
  return (
    <>
      <Navbar />

      <article className="blog-post">

        {/* ── Breadcrumb ── */}
        <p className="blog-breadcrumb">
          <span>Sports & Fitness</span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-section">Science</span>
        </p>

        {/* ── Headline & dek ── */}
        <h1 className="blog-headline">
          How Tennis, Science, and Technology Intersect 
        </h1>

        <p className="blog-dek">
          A look at the physics hiding inside every rally — spin rates, technology for tennis today, and why that fuzzy yellow ball does what it does
        </p>

        {/* ── Featured YouTube Short ── */}
        <div className="blog-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/VcaVPt8y_pQ"
            title="Tennis, Science, and Technology"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

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

        {/* ── Date + read time ── */}
        <p className="blog-dateline">August 18th 2026 &nbsp;|&nbsp; 4 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          <p className="blog-drop-cap">
            Tennis looks like a sport of footwork and reflexes (and to some extent it is), but every
            time a racket (racquet if you speak British cooler English) meets the ball there's a small physics
            experiment happening. The ball compresses, the strings snap
            back, and depending on the angle of the swing, the ball comes
            off spinning at a rate most people never stop to think about.
            That spin is the difference between a shot that sails long and
            one that drops in a foot from the baseline.
          </p>

          <p>
            <strong>My Experience With Tennis:</strong> Growing up, my dad put a racket in my hands at age 3.
            He nailed a ball hanging by a string to the living room ceiling (not garage ceiling, the actual living room ceiling) and the obsession began.
            Fast forward a few years and I'm playing the junior tennis tournaments in the United States at the sectional and national level.
            I would then go on to play college tennis and eventually win a Gold Ball (Natiional Championships) at the Father-Daughter level with my dad.
            So yes, tennis has been a prominent part of my life and I am going to be intertwining my love for tennis with my love for science and technology in this blog post.
          </p>

          <p>
            <strong>How Tennis Relates To The World of Science & Technology:</strong> 
            Tennis is really applied physics if you think about it: Spin, trajectory, and racket + ball contact all follow the same aerodynamic and mechanical rules that govern any spinning object moving through air. 
            Advances in racket and string technology (like thinner, more textured strings) let players generate more spin with less effort. This is why modern topspin is so much heavier than it was decades ago. 
            High-speed cameras and motion-tracking systems (like Hawk-Eye) have also let scientists and coaches actually measure spin rates and trajectories, turning what used to be intuition, into data-backed technique. 
            So the sport's evolution is really a technical-scientific-fun-feedback-loop: Better science reveals how spin works. Better technology lets players exploit it more effectively.
          </p>

          <p>
            <strong>Experimenting With New Technologies In Tennis:</strong> 
            Right now I'm playing tennis purely for fun, and it's turned into a great way to meet genuinely cool people through the sport. 
            Every so often something from work sparks an idea. For example, experimenting with using AI to sharpen my game. 
            Most recently, I asked ChatGPT to design a tennis drill for me — check out how that experiment went in the video at the top of this article.
          </p>

          <p>
            <strong>A few more fun facts:</strong> The fuzzy felt on a
            tennis ball isn't just for looks — it increases air
            resistance and helps the ball "grip" the strings for a split
            second longer at contact, which lets a player impart more
            spin than a smooth ball ever could. String pattern matters too:
            more open patterns (fewer strings, wider gaps) let the strings
            snap back across the ball more, which is part of why so many
            modern pros use polyester strings strung at lower tension.
            And on serves, the fastest recorded professional serves have
            approached 160 mph, but even those big first serves usually
            carry some sideways or topspin component, since a completely
            flat, spinless serve is far harder to control into a box that
            small.
          </p>

          <p>
            <strong>Why it matters if you're not a physicist:</strong> You
            don't need to know the complete physics of tennis to play the game and feel the
            difference between a flat, low-margin shot, and a heavy topspin
            ball that clears the net by three feet. 
            Maybe though, understanding the why behind it, makes it a
            lot easier to fix the "how." Maybe you (and I) should be brushing up more, swinging with a
            steeper path, or choosing a slice when you want the ball to
            stay down instead of kick up.
            Physics can help us get to those answers. Technologies can now record us so we can see the difference between what we think we're doing and what we're actually doing.
            AI can draft ideas for drills to help us improve. My ultimate argument: The more we understand the science, the more we can enjoy the sport.
          </p>

          <p>
            Next time you watch a rally, watch the ball's arc instead of
            the players. You'll start to see the spin before the ball even
            bounces. Feel free to reach out through socials linked in the
            footer if you want to chat about it.
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog9;