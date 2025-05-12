import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

const Faq = () => {
  return (
    <div className="bg-[#f5f5f5] font-montserrat">
      <Navbar />
      <FrequentlyAskedQuestions />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default Faq;