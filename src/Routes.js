import React from "react";
import BlogPostsEight from "pages/BlogPostsEight";
import BlogPostsSeven from "pages/BlogPostsSeven";
import BlogPostsSix from "pages/BlogPostsSix";
import BlogPostsFive from "pages/BlogPostsFive";
import BlogPostsFour from "pages/BlogPostsFour";
import BlogPostsThree from "pages/BlogPostsThree";
import BlogPostsTwo from "pages/BlogPostsTwo";
import BlogPostsOne from "pages/BlogPostsOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogpostsone" element={<BlogPostsOne />} />
        <Route path="/blogpoststwo" element={<BlogPostsTwo />} />
        <Route path="/blogpoststhree" element={<BlogPostsThree />} />
        <Route path="/blogpostsfour" element={<BlogPostsFour />} />
        <Route path="/blogpostsfive" element={<BlogPostsFive />} />
        <Route path="/blogpostssix" element={<BlogPostsSix />} />
        <Route path="/blogpostsseven" element={<BlogPostsSeven />} />
        <Route path="/blogpostseight" element={<BlogPostsEight />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
