import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsncondition" element={<TermsConditions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
