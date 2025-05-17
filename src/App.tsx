import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Reviews from "./pages/Reviews";
import Faq from "./pages/Faq";
import Media from "./pages/Media";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Lubricants from "./pages/Lubricants";
import AMC from "./pages/AMC";
import Warranty from "./pages/Warranty";
import InsuranceClaim from "./pages/InsuranceClaim";
import EV from "./pages/EV";
import AILabs from "./pages/AILabs";
import CarServices from "./pages/CarServices";
import CarScrapping from "./pages/CarScrapping";
import CarWorkshopBooking from "./pages/CarWorkshopBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsncondition" element={<TermsConditions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/media" element={<Media />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/lubricants" element={<Lubricants />} />
        <Route path="/amc" element={<AMC />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/insurance-claim" element={<InsuranceClaim />} />
        <Route path="/ev" element={<EV />} />
        <Route path="/ai-labs" element={<AILabs />} />
        <Route path="/services" element={<CarServices />} />
        <Route path="/car-scrapping" element={<CarScrapping />} />
        <Route path="/workshop-booking" element={<CarWorkshopBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
