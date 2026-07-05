import { Routes, Route } from "react-router-dom";  // remove BrowserRouter
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/identiverse-2026" element={<BlogPost1 />} />
      <Route path="/blog/rag" element={<BlogPost2 />} />
      <Route path="/blog/ai-formula" element={<BlogPost3 />} />
      <Route path="/blog/ai-os" element={<BlogPost4 />} />
    </Routes>
  );
}

export default App;