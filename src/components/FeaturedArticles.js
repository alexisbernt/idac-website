import { Link } from "react-router-dom";
import "../styles/FeaturedArticles.css";

// Placeholder content — swap these out with your real articles, images,
// and links. The "lead" article is the big left-hand story; "secondary"
// are the two smaller stacked stories on the right.
const leadArticle = {
  category: "Technology & Identity",
  headline: "News in Technology: August 2026 Edition",
  dek: "Cool technical things you should know about, including CarPlay, multi-agent AI, and 3 different answers from the same prompt.",
  readTime: "7 min read",
  image: "/num_3.png",
  link: "/blog/august-newsletter",
};

const secondaryArticles = [
  {
    category: "Health | Artificial Intelligence",
    headline: "MY AI COACH: How I Reworked My Marathon Training Plan",
    dek: "I built an AI agent that rebuilt my marathon training plan every single day. Here's what I learned.",
    readTime: "4 min read",
    image: "/ai-coach.png",
    link: "/blog/ai-coach",
  },
  {
    category: "Health | Science | Technology",
    headline: "My Tennis Story, The Science of Tennis, and the Technology Behind It Now",
    dek: "How Tennis, Science, and Technology Intersect.",
    readTime: "4 min read",
    image: "/era-tennis.png",
    link: "/blog/eras-of-tennis",
  },
  {
    category: "Identity & Security",
    headline: "'Cara de pau' to get to the 2026 Identiverse conference",
    dek: "The story of how I got introduced to Identity Access Management",
    readTime: "6 min read",
    image: "/identiverse-26.png",
    link: "/blog/identiverse-2026",
  },
  // {
  //   category: "RAG: Retrieval-Augmented Generation",
  //   headline: "An insight to what is going on behind the scenes of ChatGPT and other LLMs",
  //   dek: "What is Retrieval-Augmented Generation? In Basic Terms with a Weird Comparison.",
  //   readTime: "5 min read",
  //   image: "/rag.png",
  //   link: "/blog/rag",
  // },

  // {
  //   category: "Building an Agent OS",
  //   headline: "How to build an Agent OS for AI applications",
  //   dek: "An agent OS is a framework that allows AI systems to have context and interact with each other, outside applications, the environment.",
  //   readTime: "4 min read",
  //   image: "/agent-os.png",
  //   link: "/blog/ai-os  ",
  // },
  // {
  //   category: "Understanding IDPro's Slack Workspace",
  //   headline: "A Quick Overview of IDPro's Slack Workspace",
  //   dek: "I'm interested in Identity and Access Management. One of the things that was heavily encouraged to me was to join IDPro.",
  //   readTime: "1 min read",
  //   image: "/slack.png",
  //   link: "/blog/slack",
  // },
];

function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <Link to={leadArticle.link} className="lead-article">
        <div className="lead-article-image">
          <img
            src={process.env.PUBLIC_URL + leadArticle.image}
            alt={leadArticle.headline}
          />
        </div>
        <p className="article-category">{leadArticle.category}</p>
        <h2 className="lead-headline">{leadArticle.headline}</h2>
        <p className="article-dek">{leadArticle.dek}</p>
        <p className="article-readtime">{leadArticle.readTime}</p>
      </Link>

      <div className="secondary-articles">
        {secondaryArticles.map((article) => (
          <Link
            to={article.link}
            className="secondary-article"
            key={article.headline}
          >
            <div className="secondary-article-text">
              <p className="article-category">{article.category}</p>
              <h3 className="secondary-headline">{article.headline}</h3>
              <p className="article-dek">{article.dek}</p>
              <p className="article-readtime">{article.readTime}</p>
            </div>
            <div className="secondary-article-image">
              <img
                src={process.env.PUBLIC_URL + article.image}
                alt={article.headline}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;