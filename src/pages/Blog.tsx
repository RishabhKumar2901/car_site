import BlogNavbar from "../components/Blog/ BlogNavbar";
import BlogContent from "../components/Blog/BlogContent";
import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";

const Blog = () => {
  return (
    <div className="bg-[#fafafb]">
      <BlogNavbar />
      <BlogContent />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default Blog;
