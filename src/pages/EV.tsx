import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import Navbar from "../components/Navbar";
import BookEVService from "../components/BookEVService";
import EVFleetManagement from "../components/EVFleetManagement";
import OfferedServices from "../components/OfferedServices";
import { offeredServicesData } from "../static/offeredServicesData";
import EVFleetAdvantages from "../components/EVFleetAdvantages";

const EV = () => {
  return (
    <div className="bg-[#fffefe]">
      <Navbar />
      <BookEVService />
      <EVFleetManagement />
      <OfferedServices services={offeredServicesData?.ev} description="hide" />
      <EVFleetAdvantages />
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

export default EV;
