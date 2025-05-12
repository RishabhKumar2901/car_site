import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import ReachOutToUs from "../components/ReachOutToUs";
import WhoWeAre from "../components/WhoWeAre";

const ContactUs = () => {
  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />
      <ReachOutToUs />
      <WhoWeAre />
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default ContactUs;
