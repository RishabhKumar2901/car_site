import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import VehicleCareBenifits from "../components/VehicleCareBenifits";
import BrandsCarousel from "../components/BrandsCarousel";
import OfferedServices from "../components/OfferedServices";
import Navbar from "../components/Navbar";
import CustomerReviews from "../components/CustomerReviews";
import BookCarService from "../components/BookCarService";
import { offeredServicesData } from "../static/offeredServicesData";
import Glance from "../components/Home/Glance";
import ForRepairs from "../components/Home/ForRepairs";

const Home = () => {
  return (
    <div className="bg-[#fafafb]">
      <Navbar />
      <BookCarService />
      <OfferedServices services={offeredServicesData?.all} />
      <BrandsCarousel />
      <VehicleCareBenifits />
      <CustomerReviews />
      <ForRepairs />
      <Glance />
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

export default Home;
