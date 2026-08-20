import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";
import "../styles/Blog4.css";

function Blog7() {
  return (
    <>
      <Navbar />

      <article className="blog-post">

        {/* ── Breadcrumb ── */}
        <p className="blog-breadcrumb">
          <span>Technology</span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-section">Artificial Intelligence</span>
        </p>

        {/* ── Headline & dek ── */}
        <h1 className="blog-headline">
          Three Tech Things You Should Know: August 2026 Ed.
        </h1>

        <p className="blog-dek">
          CarPlay, multi-agent AI, and why the same prompt gives you three different answers
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
        <p className="blog-dateline">August 1st 2026 &nbsp;|&nbsp; 7 min read</p>

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
              src="https://www.youtube.com/embed/h0dyW0v65Oo"
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
            What's up people (and maybe agents, because I have recently heard
            agents are convoluting our spaces on the web as we enter this
            uncertain terrain of artificial intelligence and agentic
            identities).
          </p>

          <p>
            This week I'm coming to you (and yes, I — not an agent) from
            Boston, Massachusetts. In short, it's been really cool. I've
            gotten the opportunity to tour the city for the first time and
            reached my step goal every day (so that's my flex of the week).
          </p>

          <p>
            Walking across the MIT campus brought waves of inspiration,
            learning, and honestly this overwhelming sensation that I'm
            behind in life because other people are pioneering technologies
            that are so freaking cool. One thing I've gleaned from this life
            though: comparison is the thief of joy. Celebrating the success
            of others helps us live richer lives. Also, we can learn from
            the success and intelligence of others.
          </p>

          <p>
            So that's what this week's piece is all about. Celebrating and
            sharing the research, findings, and innovations of others.
          </p>

          <p>I'm going to take us through three things today:</p>

          <ol className="blog-steps-list">
            <li>
              <strong>Apple CarPlay</strong> — Dad, this one's for you.
            </li>
            <li>
              <strong>Future AI may work better when multiple AI systems
              collaborate</strong> — Cowork, agent combinations, what else?
            </li>
            <li>
              <strong>Same prompt, three different AI platforms, three
              different outputs</strong> — how each chatbot outputs
              something different.
            </li>
          </ol>

          <h2 className="blog-section-heading">First — Apple CarPlay</h2>

          <p>
            Disclaimer: I'm in Boston with my family. I'm not professionally
            professional enough yet to go to Boston for work. However, I am
            enjoying a fantastic summer vacation and time with my family in
            a city that currently has one of the most expensive rental
            markets (averaging $2,700–$3,600/month for a one-bedroom
            apartment).
          </p>

          <p>
            We rented a car in Boston. One of the first things we did with
            that car was connect Apple CarPlay. But we had difficulties. My
            dad says he always has difficulties connecting to CarPlay for
            the first time in a new vehicle. So why is that?
          </p>

          <p>
            Apple CarPlay connects an iPhone to the car either through a
            USB cable or wirelessly using Bluetooth and Wi-Fi. Bluetooth is
            our authenticator here — it establishes the connection, and then
            the system switches to a faster Wi-Fi link to stream the
            CarPlay interface while your iPhone does the processing,
            sending the display, audio, and app data to the car's
            infotainment system in real time. That's a lot of stuff to do.
          </p>

          <p>
            But (@ my dad) if that isn't enough of a justification for the
            technical things to take their sweet time, here's more insight
            into why connecting to CarPlay might take time.
          </p>

          <ol className="blog-steps-list">
            <li>
              <strong>The device has to authenticate when connecting.</strong>{" "}
              This is where we are making sure there is compatibility
              between the iPhone and car.
            </li>
            <li>
              <strong>Permission requests occur</strong>, where your iPhone
              is going to ask you to approve CarPlay, making sure you are
              okay sharing your data with the car.
            </li>
            <li>
              <strong>Saving the connection takes more time the first
              time</strong> because both the car and the iPhone store each
              other's unique identifiers and settings. This allows them to
              automatically reconnect next time. That automatic reconnect
              allows the devices to recognize each other and skip the
              entire setup process next time.
            </li>
          </ol>

          <p>
            So — cool thing — connecting to CarPlay for the first time is a
            great example of Identity and Access Management (IAM) in
            action. CarPlay isn't like an IAM system used in businesses,
            but it uses the core IAM principles.
          </p>

          <ul className="blog-checklist">
            <li>
              <strong>Identity:</strong> The iPhone and the car identify
              themselves as trusted devices.
            </li>
            <li>
              <strong>Authentication:</strong> The iPhone and car verify
              that each device is allowed to connect.
            </li>
            <li>
              <strong>Authorization:</strong> You, as the user, grant
              permission for CarPlay to access features and some of your
              data.
            </li>
            <li>
              <strong>Access Management:</strong> Once approved, the car is
              given access to the data and functions you've authorized.
            </li>
          </ul>

          <h2 className="blog-section-heading">
            Second — Future AI May Work Better When Multiple AI Systems
            Collaborate
          </h2>

          <p>
            The Massachusetts Institute of Technology, out of Boston,
            released research that shows that when multiple AI models
            collaborate, each model can specialize in a different task.
          </p>

          <p>
            Instead of one AI agent trying to do everything, specialized
            agents intertwined can communicate, combining their strengths
            to produce refined results.
          </p>

          <p>The AI platform Cowork is an example of a multi-agent AI system.</p>

          <p>
            Multi-agent systems tend to have one agent planning the overall
            task, one agent researching information, one agent writing
            code, and another agent verifying the output.
          </p>

          <p>
            In these multi-agent systems, a supervising agent (which at
            times is called an orchestrator) is the agent that combines the
            different agents' outputs into one final response. These AI
            agents communicate through APIs, shared memory, and message
            passing systems. It allows us to take a complex task and break
            it down into chunks.
          </p>

          <p>Continuing on the subject of artificial intelligence…</p>

          <h2 className="blog-section-heading">
            Third — You Get a Different Output Using Different Models
          </h2>

          <p>
            Some of you probably read this point and think something along
            the lines of, "well, duh." But why is this?
          </p>

          <p>
            The root of it is that each large language model (LLM) has its
            own unique training data, model architecture, and techniques
            for optimization.
          </p>

          <p>
            This past week I've been helping facilitate some artificial
            intelligence sessions at the firm I work at. It's been an
            experience that I've enjoyed but simultaneously feel out of
            place in. Essentially, I'm lecturing groups of 80+ people who
            are way more experienced and intelligent than me. Alas, they
            listen to my noisy 23-year-old associate self (or maybe they
            work in the background). Either way, to try and be more
            knowledgeable, I've done a decent amount of experimentation.
            This past week I've been comparing and contrasting different
            artificial intelligence platforms.
          </p>

          <p>
            For example, this past week I took the same prompt — "Give me a
            10-minute workout routine using no equipment" — and ran it in
            ChatGPT, Claude, and Kimi K3.
          </p>

          <ul className="blog-checklist">
            <li>
              ChatGPT gave me a bulleted list of exercises with ideas for
              modifications and enhancements for each.
            </li>
            <li>Claude gave me a list of exercises numbered 1–10.</li>
            <li>Kimi K3 gave me a list of exercises formatted in a table.</li>
          </ul>

          <p>
            Some of the exercises listed were the same — for example,
            push-ups were listed across the board — but some of the
            exercises differed as well.
          </p>

          <p>
            This all taught me that each company (OpenAI, Anthropic, etc.)
            fine-tunes its model based on different sets of objectives.
            Maybe one company fixates more on reasoning ability while
            another prioritizes coding performance. Objectives dictate how
            the LLM interprets prompts and, in turn, influences different
            retrieval methods.
          </p>

          <p>
            AI systems use a vast amount of retrieval methods, stemming
            from retrieval-augmented generation, to web search retrieval,
            to vector database search.
          </p>

          <p>
            <strong>Retrieval-Augmented Generation (RAG):</strong> Where AI
            searches a knowledge base or document collection for relevant
            information before generating an answer.
          </p>

          <p>
            <strong>Web Search Retrieval:</strong> Where the AI searches
            the internet to provide more "current" information.
          </p>

          <p>
            <strong>Vector Database Search:</strong> Documents get
            converted into numerical embeddings, which allows the AI to
            retrieve information based on semantic meaning instead of
            keyword matches.
          </p>

          <p>
            There's more retrieval methods, but the moral of the story is:
            different objectives lead to different retrieval methods lead
            to different answers.
          </p>

          <p>
            In my opinion, working with AI at this point is like throwing
            darts at a dartboard. You try and see what hits. Each person
            has their own unique approach. You have to find what works
            best for you and your processes. Then you have to work with
            your team and the people around you and pay attention to what
            hits for them.
          </p>

          <p>
            It's a constant learning process. Which brings us full circle.
            We can learn from the success and intelligence of others.
          </p>

          <p className="blog-sign-off">
            If you have thoughts, please share them. You can reach me at
            alexisbernt on Instagram or alexis-bernthal on LinkedIn.
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog7;