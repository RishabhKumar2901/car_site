import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import { parseFormattedText } from "../utils/parseFormattedText";
import { privacyPolicyData } from "../static/privacyPolicyData";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />
      <div className="w-full flex flex-col items-center pt-20">
        <div className="text-base font-light text-[#565757] w-[90%] xl:w-[69%] leading-[1.7rem] tracking-wide">
          {parseFormattedText(privacyPolicyData[0])}
        </div>
        <div className="text-4xl font-semibold text-[#ec1c25] w-[90%] xl:w-[69%]">
          Privacy Policy
        </div>
        <div className="text-base font-light text-[#565757] w-[90%] xl:w-[69%] leading-[1.7rem] tracking-wide">
          {parseFormattedText(privacyPolicyData[1])}
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

export default PrivacyPolicy;
