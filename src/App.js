import { Routes, Route } from "react-router-dom";  // remove BrowserRouter
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";  
import BlogPost7 from "./pages/BlogPost7";  
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import TermsAndConditions from "./pages/terms-cond";
import YouTubeVideos from "./components/YouTubeVideos";  // import Videos component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/identiverse-2026" element={<BlogPost1 />} />
      <Route path="/blog/rag" element={<BlogPost2 />} />
      <Route path="/blog/ai-formula" element={<BlogPost3 />} />
      <Route path="/blog/ai-os" element={<BlogPost4 />} />
      <Route path="/blog/vpn" element={<BlogPost5 />} />
      <Route path="/blog/slack" element={<BlogPost6 />} />
      <Route path="/blog/august-newsletter" element={<BlogPost7 />} />
      <Route path="/blog/ai-coach" element={<BlogPost8 />} />
      <Route path="/blog/eras-of-tennis" element={<BlogPost9 />} />
      <Route path="/videos" element={<YouTubeVideos />} />
    </Routes>
  );
}

export default App;