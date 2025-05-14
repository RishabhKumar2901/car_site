import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import { frequentlyAskedQuestionsData } from "../static/frequentlyAskedQuestionsData";

const Faq = () => {
  return (
    <div className="bg-[#f5f5f5] font-montserrat">
      <Navbar />
      <FrequentlyAskedQuestions questions={frequentlyAskedQuestionsData} />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default Faq;