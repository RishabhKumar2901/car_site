import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import RecentNews from "../components/RecentNews";

const Media = () => {
  return (
    <div className="bg-[#fffefe] font-montserrat">
      <Navbar />
      <RecentNews />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default Media;