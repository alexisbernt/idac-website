import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";
import "../styles/Blog4.css";

function Blog8() {
  return (
    <>
      <Navbar />

      <article className="blog-post">

        {/* ── Breadcrumb ── */}
        <p className="blog-breadcrumb">
          <span>Health & Fitness</span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-section">Artificial Intelligence</span>
        </p>

        {/* ── Headline & dek ── */}
        <h1 className="blog-headline">
          Alexis's Story: From Logging Runs to Having a Coach That Learns Her
        </h1>

        <p className="blog-dek">
          How a broke college grad training for her first marathon built an AI agent that rebuilt her training plan every single day
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

        {/* ── Date + read time ── */}
        <p className="blog-dateline">August 9th 2026 &nbsp;|&nbsp; 4 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          {/* ── Embedded video ── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "360px",
              aspectRatio: "9 / 16",
              margin: "0 auto 24px",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/FG1DDfIZc1Y"
              title="YouTube video player"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p className="blog-drop-cap">
            Hi! I'm Alexis and I have been running for years the standard
            way: a cheap Fitbit ($40 kind of Fitbit from Walmart) which
            tracks steps, time, and heart rate. I'd glance at the numbers
            afterward to see if I was improving. The data sat there, mildly
            interesting, rarely acted on.
          </p>

          <p>
            <strong>The old process:</strong> Every run got logged
            automatically. Every few months, I would eyeball trends myself
            thinking — "my pace is creeping up," "I've been tired lately,"
            "I hurt my foot, should I run?" — and adjust training on gut
            feeling.
          </p>

          <p>
            As a recently-broke-college-grad I wanted real coaching as I
            trained for my first marathon. I knew I'd have to pay for a
            human coach (which can be very costly) or follow a generic
            training plan. That generic plan wouldn't know anything about
            my specific body, sleep, or recovery patterns.
          </p>

          <p>
            <strong>The replacement trap avoided:</strong> I thought an LLM
            might be able to piece together some analysis for my runs and
            pull in interesting facts from online. So my first move was
            asking AI to just "analyze my run." After the fact I would get
            a nice summary, some encouragement, and maybe a pace goal for
            the next run. Useful, but it was still just a fancier readout.
            Nothing about the process had changed. I was still the only one
            connecting the dots between runs.
          </p>

          <p>
            <strong>The reinvention:</strong> The past week I rebuilt the
            whole loop around AI instead of bolting it onto the end of it.
            I created an AI agent and started feeding it more than just
            pace and distance. I gave the agent how many hours of sleep I
            got, how my foot injury was feeling, my resting heart rate, how
            my legs felt on a 1–10 scale, weather, and sometimes even what
            I ate beforehand.
          </p>

          <p>
            Instead of reviewing that data occasionally, I set it up so the
            AI reviewed it after every single run and adjusted my upcoming
            week's plan in response. It helped me decide to push a hard
            interval session back a day when my recovery metrics looked
            off. It gave me a recovery / shakeout run instead of a
            scheduled tempo run when I'd only gotten five and a half hours
            of sleep (whoops). This past Saturday, the agentic coach nudged
            my mileage up a bit faster than a generic plan would because I
            took Friday as a rest day and was handling the rest of the load
            well.
          </p>

          <p>
            <strong>The key change:</strong> Training plans stopped being
            fixed in advance. They became something that re-formed daily
            based on what my body was actually reporting. I wasn't using a
            standard template that assumed what a "week 6 marathon block"
            should look like for anyone.
          </p>

          <p>
            <strong>The result:</strong> I wasn't just getting an analysis
            of runs I'd already done (one completed). I now had something
            closer to a coach that noticed patterns I wouldn't have
            connected myself, and that catered to my plan (before running).
          </p>

          <p>
            <strong>The shift in a sentence:</strong> I didn't ask AI to
            summarize my runs. Instead, I asked what training would look
            like if my plan could actually respond to my body in real
            time. That is how I rebuilt my process.
          </p>

          <p>
            <strong>The Truth:</strong> At this point, I don't think my "AI
            Running Coach" remotely compares to the caliber of a
            professional coach. A professional coach has the
            human-connection element, enthusiasm, professionalism, and
            drive that is different from an LLM. My opinion: a good human
            coach is better than an agentic coach. If I had the funds, I
            would choose to hire a human over the "AI Running Coach" every
            day of the week. However, my agentic "AI Running Coach" did
            help me reflect and learn more about my body this past week. It
            also helped me in reworking a training process that wasn't
            working. For that I'm thankful for my "AI Running Coach." It
            has been a fun experiment I recommend to others in the running
            / tech community. Maybe even a human coach can try it out and
            provide some professional thoughts / compare and contrast
            analysis. Feel free to reach out through socials linked in the footer if you want to chat about it.
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog8;