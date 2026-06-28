import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BlogPost.css";

function Blog2() {
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
          Retrieval-Augmented Generation (RAG), Explained
        </h1>

        <p className="blog-dek">
          What it is, why it matters, and where it's headed in 2026
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
            src={`${process.env.PUBLIC_URL}/rag.png`}
            alt="Diagram illustrating Retrieval-Augmented Generation"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("blog-hero--empty");
            }}
          />
          <figcaption className="blog-hero-caption">
            ILLUSTRATION: RAG ARCHITECTURE OVERVIEW
          </figcaption>
        </figure>

        {/* ── Date + read time ── */}
        <p className="blog-dateline">Jun 22nd 2026 &nbsp;|&nbsp; 6 min read</p>

        {/* ── Body copy ── */}
        <div className="blog-body">

          <p className="blog-drop-cap">
            Artificial Intelligence is a hot topic right now. Inside that
            conversation, one technique has quietly become the backbone of how
            enterprises actually deploy it: Retrieval-Augmented Generation, (RAG).
          </p>

          <p>
            Before diving in, a quick note on format of this article's contents. This article has side
            tangents — little asides tucked into square brackets [ ] where it
            felt right to add color or context. If you want a clean version
            without them, a tangent-free edition is on the way.
          </p>

          <p>
            Let's start with the foundation. Artificial Intelligence can be
            defined as machine capabilities that mimic human-like intelligence
            and generate outputs. AI systems perform tasks that have
            traditionally required human intelligence: Reasoning,
            problem-solving, decision-making, and learning. A Large Language
            Model (LLM) is one form of AI. Specifically, it is a system that
            generates outputs from a massive training dataset plus the prompt
            you give it. [Think of LLMs as that friend who has read every book
            in the library but stopped checking out new ones after a certain
            date. Brilliant, but occasionally behind.]
          </p>

          <p>
            LLMs are trained on enormous amounts of text, which means their
            knowledge is frozen at a particular point in time. You can think of this as their "cutoff."
            Ask them about something that happened after that cutoff and they
            may confidently give you a wrong answer. [And I said CONFIDENTLY. Until you convince them that they're wrong.] That's the problem RAG
            was built to solve.
          </p>

          <h2 className="blog-section-heading">1. What is it?</h2>

          <p>
            <strong>Retrieval-Augmented Generation (RAG)</strong> is a
            technique that enhances LLMs by connecting them to external
            knowledge sources at the moment they generate a response. Instead
            of relying solely on what they memorized during training, a RAG
            system does two things: (A) retrieves relevant information from an
            outside source [like a company database, a document library, or the
            live web] and then (B) generates a fresh response grounded in what
            it just retrieved.
          </p>

          <p>
            The pipeline has four core steps: <em>Ingestion</em> (loading
            authoritative data into a knowledge base), <em>Retrieval</em>{" "}
            (pulling the most relevant chunks based on your query),{" "}
            <em>Augmentation</em> (combining those chunks with your original
            question into a single enriched prompt), and <em>Generation</em>{" "}
            (the LLM producing an answer using that enriched context). Simple
            in concept. Powerful in practice.
          </p>

          <h2 className="blog-section-heading">2. What's the purpose?</h2>

          <p>
            The core purpose of RAG is to make AI more accurate and more
            trustworthy. RAG also avoids the enormous cost of
            retraining a model from scratch every time the world changes.
          </p>

          <p>
            The enemy here is the <em>hallucination</em>: when an AI takes a
            confident swing at a question and misses entirely. [Imagine asking
            a colleague for the latest policy update and they recite something
            from three years ago... with complete certainty. That's the vibe here.]
            By grounding responses in retrieved, verified content, RAG
            dramatically reduces the "cutoff" problem. The model doesn't have to guess from memory; it can pull in the latest information and cite it.
          </p>

          <p>
            RAG systems can pull from live, updated sources at
            inference time, meaning the knowledge base can evolve without
            touching the underlying model. <em>Studies show that enterprises report 30–70%
            efficiency gains in knowledge-heavy workflows after RAG
            deployment.</em>
          </p>

          <h2 className="blog-section-heading">3. Real-world examples</h2>

          <p>
            Let's make it concrete with three examples:
          </p>

          <p>
            <strong>(i) Customer Support.</strong> Chatbots used in customer
            service retrieve answers from troubleshooting guides and product
            manuals in real time. The bot doesn't need to have memorized every
            manual, instead, it just needs to find the right page when asked. 
          </p>

          <p>
            <strong>(ii) Academic Help.</strong> Some LLMs, when asked a
            research question, will surface relevant papers, articles, or
            textbook pages alongside their answer. The model retrieves and
            cites instead of guessing based on memory. [Finally, footnotes that
            actually check out.]
          </p>

          <p>
            <strong>(iii) The Workplace.</strong> Corporate firms are uploading
            thousands of internal documents into RAG systems so their AI tools
            respond with company-specific knowledge. Microsoft Copilot's "Work"
            mode is a clear example. It retrieves from a company's internal
            document repository, so the generated content is specific to that
            organization rather than generic.
          </p>

          <h2 className="blog-section-heading">Where RAG is headed in 2026</h2>

          <p>
            RAG has come a long way from its original retrieve-and-read
            pipeline. Here is what is reshaping the field right now.
          </p>

          <p>
            <strong>Agentic RAG</strong> is the dominant pattern in 2026.
            Rather than a single static query, AI agents now orchestrate
            retrieval. This means AI models are breaking complex questions into focused sub-queries,
            running them in parallel, reviewing the results, and iterating
            before generating a final answer. It is less of a lookup and more
            of a research process.
          </p>

          <p>
            <strong>GraphRAG</strong> takes retrieval a step further by
            organizing knowledge into structured graphs rather than flat
            document chunks. Instead of retrieving isolated text snippets, it
            retrieves subgraphs (which in this case can include) entities, relationships, and the context
            surrounding both). 
          </p>

          <p>
            <strong>Multimodal RAG</strong> is expanding the input and output
            beyond text. Systems can now retrieve and reason over images,
            audio, tables, and video. This is crazy and theoretically means a maintenance engineer could ask
            a question about a turbine failure and receive an answer grounded
            in both technical documents and visual inspection data. [RAG went
            from reading to actually looking at things. DID I SAY DANG.]
          </p>

          <p>
            <strong>A takeaway: Governance and access controls</strong> are no longer
            optional. As RAG systems sit on top of sensitive enterprise data,
            the question of <em>who can retrieve what</em> has become
            mission-critical. Leading enterprise deployments now layer in
            access policies and metadata controls to ensure the AI can't become
            an accidental back door to data someone isn't supposed to see.
          </p>

          <p>
            Here's my last weird connection to all of this that may or may not make sense.
            Ironically, the abbreviation RAG shares a name with the rag doll, 
            a toy made from scraps of fabric, perceived differently by everyone
            who sees it. Since the rag doll is assembled from pieces that individually mean little
            but together make something whole, I think the parallel holds up better
            than you'd think. RAG is, at its core, about assembling the right
            scraps of knowledge at the right moment to produce something
            genuinely useful. [It was RAG-ical to have you read this far.]
          </p>

          <p className="blog-sign-off">
            To stay current on Identity (IAM) learnings and AI developments, subscribe to the
            mailing list (it's free). The goal here is to make real-world
            technology legible to real people. Thanks for reading!
          </p>

        </div>
      </article>

      <Footer />
    </>
  );
}

export default Blog2;