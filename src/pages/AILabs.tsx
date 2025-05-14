import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import { parseFormattedText } from "../utils/parseFormattedText";
import { aiLabsData } from "../static/aiLabsData";

const AILabs = () => {
  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />

      <div className="w-full flex justify-center pt-32">
        <div className="w-[36%]">
          {parseFormattedText(aiLabsData?.section1?.text)}
        </div>

        <div>
          <div
            className="text-[#ed1d25] text-4xl font-black text-end mb-5"
            style={{
              textShadow: "2px 5px #000",
            }}
          >
            Comming Soon
          </div>
          <img
            src={aiLabsData?.section1?.image}
            alt="AI Labs Image"
            className="w-[35.813rem] h-[18.801rem]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
      <div className="w-[36%]">
          {parseFormattedText(aiLabsData?.section1?.text)}
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

export default AILabs;
