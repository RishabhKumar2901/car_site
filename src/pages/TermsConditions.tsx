import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import { termsnConditionData } from "../static/termsConditionData";
import { parseFormattedText } from "../utils/parseFormattedText";

const TermsConditions = () => {
  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />
      <div className="text-4xl font-semibold pt-32 text-center">
        Terms & Condition
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] xl:w-[69%]">
          {parseFormattedText(termsnConditionData)}
        </div>
      </div>
      <a
        href="https://apps.apple.com/in/app/vehiclecare/id1634342039?mt=8"
        className="w-full flex justify-center px-4"
      >
        <img src={app_banner} alt="App Banner" className="w-full" />
      </a>
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default TermsConditions;
