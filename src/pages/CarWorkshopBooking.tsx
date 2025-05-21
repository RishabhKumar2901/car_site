import { useLocation } from "react-router-dom";
import CarWorkshopBookingSection1 from "../components/CarWorkshopBooking/CarWorkshopBookingSection1";
import CarWorkshopBookingSection2 from "../components/CarWorkshopBooking/CarWorkshopBookingSection2";
import CarWorkshopBookingSection3 from "../components/CarWorkshopBooking/CarWorkshopBookingSection3";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { carWorkshopBookingSection4Data } from "../static/CarWorkshopBookingData/carWorkshopBookingSection4Data";

const CarWorkshopBooking = () => {
  const location: any = useLocation();

  return (
    <div className="bg-[#fef6f6]">
      <Navbar />

      <div className="pt-24 px-3 text-[#343a40] font-bold text-4xl bg-[#fefefe]">
        Car Service Center In {location?.state?.address2}
      </div>

      <CarWorkshopBookingSection1 />
      <CarWorkshopBookingSection2 />
      <CarWorkshopBookingSection3 />

      <div className="w-full flex flex-col items-center lg:pl-3 mt-2 mb-2 lg:mt-0 px-2 pt-5 pb-10 bg-[#fefefe]">
        <div className="w-full sm:w-[95%]">
          <div className="text-[1.625rem] font-semibold w-full mt-8 tracking-wider">
            {carWorkshopBookingSection4Data?.heading}
          </div>
          <div className="bg-[#FF5757] h-0.5 w-1/12 mt-3"></div>
          <div className="flex gap-2 flex-wrap mt-6">
            {carWorkshopBookingSection4Data?.searches?.map((item, index) => (
              <div
                className="bg-[#6c757d] text-[0.65rem] tracking-widest font-semibold py-1 px-2 text-white rounded"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarWorkshopBooking;
