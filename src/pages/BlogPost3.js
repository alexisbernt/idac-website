import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";
import "../styles/Blog3.css";

function Blog3() {
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
          The AI Prompt Formula
        </h1>

        <p className="blog-dek">
          How to get the best out of AI - 4 Things
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

        {/* ── Embedded video ── */}
        <figure className="blog-video">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/ClEBQ588Z8Y"
            title="AI Prompt Formula Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <figcaption className="blog-hero-caption">
            VIDEO: AI PROMPT FORMULA WALKTHROUGH SHORT
          </figcaption>
        </figure>

        {/* ── Date + read time ── */}
        <p className="blog-dateline">Jun 22nd 2026 &nbsp;|&nbsp; 5 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          <p className="blog-drop-cap">
            AI is being woven into workflows across every industry right now.
            It seems like EVERY big company or institution is 'heavily investing' in AI, and the tools are getting better and more capable every day. The potential is enormous, but so is the risk of frustration. To decide whether AI is a help or a hindrance, you need to understand how to ask it questions. The good news: There is a formula for that.
          </p>

          <p>
            The problem is that AI can hallucinate. It can produce confident,
            fluent, completely wrong answers. The more descriptive and precise
            your prompt, the less room there is for the model to fill in the
            blanks with something plausible-sounding but inaccurate. Vague
            inputs produce vague outputs. If you've taken a computer science class you've probably heard the saying: garbage in, garbage out. Except, in the case of AI, the
            garbage is often presented in beautifully structured paragraphs,
            which makes it harder to spot.
          </p>

          <p>
            Again, my good news for you (because we need more optimism in our technical lives), is that there is a formula. It is not magic, but it works.
          </p>

          {/* ── Formula callout ── */}
          <div className="prompt-formula-box">
            <p className="prompt-formula-label">The Formula</p>
            <p className="prompt-formula-equation">
              Role + Task + Context + Format
            </p>
          </div>

          <h2 className="blog-section-heading">Breaking down the four parts</h2>

          <p>
            <strong>Role</strong> tells the AI what perspective to adopt before
            it starts generating. Think of it as casting. You are deciding who
            is in the room answering your question. Examples: "Act as a cybersecurity
            lawyer," "respond as an enthusiastic high school science teacher,"
            "write as a skeptical financial analyst." The role narrows the
            model's frame of reference before the task begins, which changes
            its vocabulary, tone, and how it prioritizes information. [A model
            told to act as a senior consultant will produce very different
            output than the same model responding as a friendly generalist.]
          </p>

          <p>
            <strong>Task</strong> is the actual ask. The specific goal or
            deliverable you want. Be concrete. "Summarize this" versus
            "Summarize the three main risks in this document in plain language."
            See the difference?
            The task should define what success looks like before the model
            starts generating.
          </p>

          <p>
            <strong>Context</strong> is the background information the AI needs
            to answer well. Ask: What is the scenario? Who is the audience? What
            constraints apply? What has already been tried? Context is where
            most prompts fall short. People state the task but leave out the
            framing that would make a good answer come back.
          </p>

          <p>
            <strong>Format</strong> specifies what kind of output you want.
            Consider: Bullet points or prose? A table? Code? A numbered list? A one-page
            summary or a full report? Does it need to include your company's branding?
            PowerPoint? Excel? If you do not specify, the model will
            default to whatever format it considers most typical for your
            request. [Telling an AI "respond
            in a three-row table with columns for risk, likelihood, and
            mitigation" gets you exactly that. Not specifying gets you three
            paragraphs that you then have to manually reformat anyway.]
          </p>

          <h2 className="blog-section-heading">A worked example</h2>

          <p>
            Here is the same request, with and without the formula:
          </p>

          <div className="prompt-example-box">
            <div className="prompt-example-col prompt-example-weak">
              <p className="prompt-example-label">Without the formula</p>
              <p className="prompt-example-text">
                "Tell me about cybersecurity risks."
              </p>
            </div>
            <div className="prompt-example-col prompt-example-strong">
              <p className="prompt-example-label">With the formula</p>
              <p className="prompt-example-text">
                "You are a senior cybersecurity consultant [<em>Role</em>].
                Identify the top three identity-related risks for a mid-size
                professional services firm [<em>Task</em>]. The firm has around
                500 employees, uses Microsoft 365, and has no dedicated security
                team [<em>Context</em>]. Present your answer as a numbered list
                with a one-sentence explanation for each risk [<em>Format</em>]."
              </p>
            </div>
          </div>

          <p>
            The second prompt is longer and requires far fewer follow-up questions or rounds of revision.
          </p>

          <h2 className="blog-section-heading">What has changed in 2026</h2>

          <p>
            The formula still holds. But it is worth noting how the landscape
            has shifted around it.
          </p>

          <p>
            <strong>Models got better at reading intent.</strong> Casual
            prompting which means just typing what you want in plain language now works
            well for everyday tasks. The formula matters most in production
            contexts: This would be when you need consistent outputs, when the stakes are
            high, or when you are building something that runs the same prompt
            thousands of times.
          </p>

          <p>
            <strong>Prompt engineering became everyone's job.</strong> In May 2025 is was reported that prompt engineering as a standalone
            role had largely disappeared, with the majority of firms now
            providing it as standard training across all roles. The skill got
            absorbed into the job description of anyone who works with AI.
            [Which is now most of us.]
          </p>

          <p>
            <strong>Chain-of-thought prompting evolved.</strong> Asking a model
            to "think step by step" USED to reliably improve output quality on
            complex tasks. On newer reasoning models (which now do internal
            step-by-step thinking on their own) adding that phrase can actually
            hurt performance. The models have internalized the technique now, so it is no longer necessary to explicitly ask for it. 
          </p>

          <p>
            <strong>Structured output matters more in agentic workflows.</strong>{" "}
            As AI systems increasingly act as orchestrators, which means breaking tasks into
            sub-tasks, querying tools, and generating structured outputs for
            downstream systems, precise format instructions have become
            genuinely critical. An agent returning a malformed JSON can break an
            entire pipeline. Format is no longer just a preference; in
            production, it is a contract [and I'm so excited I was able to use a semi-colon in that sentence.]
          </p>

          <h2 className="blog-section-heading">The one rule behind the formula</h2>

          <p>
            Clear goals help AI understand what you are testing and what success
            looks like. Requirements (the prompt) and acceptance criteria (what
            good output means) must be explicit to get thoughtful output. The
            formula is just a structured way of being clear.
          </p>

          <p>
            Start the AI conversation early in a project to get an initial draft,
            then refine. The best results come from iteration. Not from trying to
            write the perfect prompt on the first attempt. Collaboration between
            human intent and AI generation is where the real power sits.
          </p>

          <p>
            And always [did I say ALWAYS] review and validate what comes back. The formula reduces
            hallucinations, but it does not eliminate them. You are still the
            one responsible for what goes out the door.
          </p>

          <p className="blog-sign-off">
            If this was useful, the mailing list goes deeper. Subscribe for
            free [did I say FREE] and get updates on AI, identity, and the tools shaping how
            we work.
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog3;