import Footer from "./pages/Footer";
import UpperFooter from "./pages/UpperFooter";
import app_banner from "./assets/app_banner.png";

function App() {
  return (
    <>
      <a
        href="https://apps.apple.com/in/app/vehiclecare/id1634342039?mt=8"
        className="w-full flex justify-center px-4"
      >
        <img src={app_banner} alt="App Banner" className="w-full" />
      </a>
      <UpperFooter />
      <Footer />
    </>
  );
}

export default App;
