import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import Navbar from "../components/Navbar";
import ClaimJourney from "../components/ClaimJourney";
import InsuranceClaims from "../components/InsuranceClaims";
import CustomerReviews from "../components/CustomerReviews";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import { insuranceClaimFAQData } from "../static/insuranceClaimFAQData";

const InsuranceClaim = () => {
  return (
    <div className="bg-[#fffefe]">
      <Navbar />
      <ClaimJourney />
      <InsuranceClaims />
      <div className="bg-[#f5f1ef] md:-mb-20 mx-3">
        <FrequentlyAskedQuestions questions={insuranceClaimFAQData} />
      </div>
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

export default InsuranceClaim;
