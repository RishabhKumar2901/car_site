import CustomerReviews from "../components/CustomerReviews";
import FAQonServices from "../components/FAQonServices";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OtherModels from "../components/OtherModels";
import ServicesDashboard from "../components/ServicesDashboard";
import UpperFooter from "../components/UpperFooter";
import WhyChooseServices from "../components/WhyChooseServices";
import { insuranceClaimFAQData } from "../static/insuranceClaimFAQData";

const CarServices = () => {
  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />

      <ServicesDashboard />

      <WhyChooseServices />
      <div className="bg-[#f5f1ef] md:-mb-20 mx-3">
        <FAQonServices questions={insuranceClaimFAQData} />
      </div>
      <CustomerReviews />
      <OtherModels />

      <UpperFooter />
      <Footer />
    </div>
  );
};

export default CarServices;
