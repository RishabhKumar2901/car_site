import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import VehicleCareBenifits from "../components/VehicleCareBenifits";
import OfferedServices from "../components/OfferedServices";
import Navbar from "../components/Navbar";
import CustomerReviews from "../components/CustomerReviews";
import { offeredServicesData } from "../static/offeredServicesData";
import BookCarServiceByLocation from "../components/CarService/BookCarServiceByLocation";
import ServiceStepsAndPrice from "../components/CarService/ServiceStepsAndPrice";
import WhyChooseCarService from "../components/CarService/WhyChooseCarService";

const CarServices = () => {
  return (
    <div className="bg-[#fefeff]">
      <Navbar />
      <BookCarServiceByLocation />
      <OfferedServices services={offeredServicesData?.all} />
      <ServiceStepsAndPrice />
      <div className="bg-[#fafafb] pt-20 pb-10 mt-5">
        <VehicleCareBenifits />
      </div>
      <WhyChooseCarService />
      <CustomerReviews />
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

export default CarServices;
