import CarWorkshopBookingSection1 from "../components/CarWorkshopBooking/CarWorkshopBookingSection1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CarWorkshopBooking = () => {
  return (
    <div className="bg-[#fffefe]">
      <Navbar />

      <div className="pt-24 px-3 text-[#343a40] font-bold text-4xl">
        Car Service Center In Avas Vikas Colony ,Agra
      </div>

      <CarWorkshopBookingSection1 />

      <Footer />
    </div>
  );
};

export default CarWorkshopBooking;
