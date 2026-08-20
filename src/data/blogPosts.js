// data/blogPosts.js
//
// One entry per blog post. `link` MUST exactly match the route paths
// defined in App.js, or clicking the card will 404.
//
// TODO: Blog1 and Blog2 below have placeholder title/description/image —
// swap those out for the real content from your BlogPost1.jsx and
// BlogPost2.jsx files.

const blogPosts = [
  {
    link: "/blog/august-newsletter",
    image: "/num_3.png",
    category: "Updates in Technology",
    title: "August Newsletter: CarPlay, multi-agent AI, 3 different answers from the same prompt",
    description:
      "Hi! I'm Alexis. I'm learning a bunch of cool technical things and you should too. Here's my first tech newsletter.",
    readTime: "7 min read",
  },
  {
    link: "/blog/ai-coach",
    image: "/ai-coach.png",
    category: "Artificial Intelligence",
    title: "AI Running Coach: How I Reworked My Marathon Training Plan",
    description:
      "I built an AI agent that rebuilt my marathon training plan every single day. Here's what I learned.",
    readTime: "4 min read",
  },
  {
    link: "/blog/eras-of-tennis",
    image: "/era-tennis.png",
    category: "'Science!'",
    title: "The Science of Tennis (ft. My Tennis Story)",
    description:
      "How Tennis, Science, and Technology Intersect",
    readTime: "4 min read",
  },
  {
    link: "/blog/slack",
    image: "/slack.png",
    category: "Understanding IDPro's Slack Workspace",
    title: "A Quick Overview of IDPro's Slack Workspace",
    description:
      "I'm interested in Identity and Access Management. One of the things that was heavily encouraged to me was to join IDPro.",
    readTime: "1 min read",
  },
  {
    link: "/blog/ai-os",
    image: "/agent-os.png", 
    category: "Artificial Intelligence",
    title: 'Building an "Agent OS"',
    description:
      "The operating system for your AI agents — and how to start building yours.",
    readTime: "4 min read",
  },
  {
    link: "/blog/vpn",
    image: "/vpn.png", 
    category: "Virtual Private Networks",
    title: "Virtual Private Networks (VPNs) 101",
    description:
      "An introduction to VPNs and how they work. Plus some solutions you can implement today to protect your privacy online.",
    readTime: "4 min read",
  },
  {
    title: "AI Prompting Formula: The Hack to Get Better Results",
    description: "Four things to include in your prompt to get better results from AI",
    category: "Artificial Intelligence",
    image: "/rag.png",
    readTime: "6 min read",
    link: "/blog/ai-formula",
  },
  {
    title: "Identiverse 2026",
    description:
      "'Cara de pau' to get to the 2026 Identiverse conference",
    category: "Identity & technology",
    image: "/identiverse-26.png",
    readTime: "6 min read",
    link: "/blog/identiverse-2026",
  },
  {
    link: "/blog/rag",
    image: "/rag-doll2.png", 
    category: "Artificial Intelligence",
    title: "Retrieval Augmented Generation (RAG)",
    description: "AI Techniques for using external knowledge sources to improve the quality of generated content.",
    readTime: "4 min read",
  },

];

export default blogPosts;