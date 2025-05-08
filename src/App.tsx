import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsncondition" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
