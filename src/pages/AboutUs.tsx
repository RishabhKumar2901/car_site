import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import About from "../components/About";

const AboutUs = () => {
  return (
    <div className="bg-[#fffefe] font-montserrat">
      <Navbar />
      <About />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default AboutUs;