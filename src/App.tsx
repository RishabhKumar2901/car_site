import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsncondition" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
