import LeftWorkshopBookingSection from "./CarWorkshopBookingSection1/LeftWorkshopBookingSection";
import RightWorkshopBookingSection from "./CarWorkshopBookingSection1/RightWorkshopBookingSection";

 
const CarWorkshopBookingSection1 = () => {
  return (
    <div className="p-5 flex flex-wrap">
        <LeftWorkshopBookingSection />
        <RightWorkshopBookingSection />
    </div>
  );
};

export default CarWorkshopBookingSection1;