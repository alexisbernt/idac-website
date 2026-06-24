import "../styles/FeaturedArticles.css";

// Placeholder content — swap these out with your real articles, images,
// and links. The "lead" article is the big left-hand story; "secondary"
// are the two smaller stacked stories on the right.
const leadArticle = {
  category: "Identity & Security",
  headline: "'Cara de pau' to get to the 2026 Identiverse conference",
  dek: "The story of how I got introduced to Identity Access Management",
  readTime: "3 min read",
  image: "/identiverse-26.png",
  link: "/blog/identiverse-2026",
};

const secondaryArticles = [
  {
    category: "RAG: Retrieval-Augmented Generation",
    headline: "An insight to what is going on behind the scenes of ChatGPT and other LLMs",
    dek: "What is Retrieval-Augmented Generation? In Basic Terms with a Weird Comparison",
    readTime: "4 min read",
    image: "/rag.png",
    link: "/blog/rag",
  },
  {
    category: "Podcasts",
    headline: "Why I Started Recording the Journey",
    dek: "Turning hallway conversations into episodes",
    readTime: "5 min read",
    image: "/placeholder-secondary-2.jpg",
    link: "#",
  },
];

function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <a className="lead-article" href={leadArticle.link}>
        <div className="lead-article-image">
          <img src={leadArticle.image} alt={leadArticle.headline} />
        </div>
        <p className="article-category">{leadArticle.category}</p>
        <h2 className="lead-headline">{leadArticle.headline}</h2>
        <p className="article-dek">{leadArticle.dek}</p>
        <p className="article-readtime">{leadArticle.readTime}</p>
      </a>

      <div className="secondary-articles">
        {secondaryArticles.map((article, index) => (
          <a
            className="secondary-article"
            href={article.link}
            key={article.headline}
          >
            <div className="secondary-article-text">
              <p className="article-category">{article.category}</p>
              <h3 className="secondary-headline">{article.headline}</h3>
              <p className="article-dek">{article.dek}</p>
              <p className="article-readtime">{article.readTime}</p>
            </div>
            <div className="secondary-article-image">
              <img src={article.image} alt={article.headline} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;