import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPost1 from "./pages/BlogPost1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/identiverse-2026" element={<BlogPost1 />} />
        <Route path="/blog/rag" element={<BlogPost1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
