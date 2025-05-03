import Footer from "./pages/Footer";
import UpperFooter from "./pages/UpperFooter";
import app_banner from "./assets/app_banner.png";
import VehicleCareBenifits from "./pages/VehicleCareBenifits";
import BrandsCarousel from "./pages/BrandsCarousel";
import OfferedServices from "./pages/OfferedServices";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="bg-[#fafafb]">
      <Navbar />
      <OfferedServices />
      <BrandsCarousel />
      <VehicleCareBenifits />
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
}

export default App;
