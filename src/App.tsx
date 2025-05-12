import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Reviews from "./pages/Reviews";
import Faq from "./pages/Faq";
import Media from "./pages/Media";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";

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
      </Routes>
    </Router>
  );
}

export default App;
