import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import Navbar from "../components/Navbar";
import CarScrappingSection1 from "../components/CarScrapping/CarScrappingSection1";
import CarScrappingSection2 from "../components/CarScrapping/CarScrappingSection2";
import CarScrappingSection3 from "../components/CarScrapping/CarScrappingSection3";

const CarScrapping = () => {
  return (
    <div className="bg-[#fafafb]">
      <Navbar />
      <CarScrappingSection1 />
      <CarScrappingSection2 />
      <CarScrappingSection3 />
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

export default CarScrapping;
