import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
// import VehicleCareBenifits from "../components/VehicleCareBenifits";
// import BrandsCarousel from "../components/BrandsCarousel";
// import OfferedServices from "../components/OfferedServices";
import Navbar from "../components/Navbar";
import CustomerReviews from "../components/CustomerReviews";
import BookCarService from "../components/Home/BookCarService";
// import { offeredServicesData } from "../static/offeredServicesData";
import Glance from "../components/Home/Glance";
import ForRepairs from "../components/Home/ForRepairs";
import FAQonNearByCarService from "../components/NearByCarService/FAQonNearByCarService";
import { faqonNearByCarServiceData } from "../static/NearByCarServiceData/faqonNearByCarServiceData";
import ContactSupport from "../components/NearByCarService/ContactSupport";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import SolutionsAndServices from "../components/Home/SolutionsAndServices";

const Home = () => {
  return (
    <div className="bg-[#fafafb]">
      <Navbar />
      <BookCarService />
      {/* <OfferedServices services={offeredServicesData?.all} /> */}
      <SolutionsAndServices />
      {/* <BrandsCarousel /> */}
      {/* <VehicleCareBenifits /> */}
      <WhyChooseUs />
      <div className="bg-[#f4f0ef] flex justify-center pt-10 pb-20 mx-3">
        <div className="w-[95%] lg:w-[75%] flex md:flex-wrap-reverse lg:flex-nowrap gap-10">
        <div className="w-full lg:w-2/3">
          <FAQonNearByCarService questions={faqonNearByCarServiceData} />
        </div>
        <div className="hidden md:block lg:w-1/3 pt-20">
          <ContactSupport />
        </div>
        </div>
      </div>
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
