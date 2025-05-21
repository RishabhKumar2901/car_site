import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import UpperFooter from "../components/UpperFooter"
import app_banner from "../assets/app_banner.png";
import WorkshopPartners from "../components/WorkshopPartners";

const PartnerWorkshop = () => {
  return (
    <div className="bg-[#fefeff]">
    <Navbar />
    <WorkshopPartners />
    <a
      href="https://apps.apple.com/in/app/vehiclecare/id1634342039?mt=8"
      className="w-full flex justify-center px-4"
    >
      <img src={app_banner} alt="App Banner" className="w-full" />
    </a>
    <UpperFooter />
    <Footer />
  </div>
  )
}

export default PartnerWorkshop