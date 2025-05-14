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

      <div className="w-full flex flex-col-reverse xl:flex-row justify-center items-center gap-8 pt-32 px-4">
        <div className="w-full xl:w-[36%] font-semibold text-2xl lg:text-4xl">
          Welcome To <span className="text-[#ed1d25]">VehicleAI Labs: </span>
          Revolutionizing Vehicle Care In India
          {parseFormattedText(aiLabsData?.section1?.text)}
        </div>

        <div className="w-full xl:w-auto text-center xl:text-right">
          <div
            className="text-[#ed1d25] text-3xl xl:text-4xl font-black mb-5"
            style={{
              textShadow: "2px 5px #000",
            }}
          >
            Coming Soon
          </div>
          <img
            src={aiLabsData?.section1?.image}
            alt="AI Labs Image"
            className="w-full max-w-[35.813rem] h-auto pointer-events-none"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-4 px-4">
        <div className="w-full xl:max-w-[70rem] 2xl:max-w-[75rem]">
          {parseFormattedText(aiLabsData?.section2, "mt-4")}
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
