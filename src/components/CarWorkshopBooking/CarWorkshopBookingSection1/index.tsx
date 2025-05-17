import LeftWorkshopBookingSection from "./LeftWorkshopBookingSection";
import RightWorkshopBookingSection from "./RightWorkshopBookingSection";

 
const CarWorkshopBookingSection1 = () => {
  return (
    <div className="p-5 mb-2 flex flex-wrap bg-[#fffefe]">
        <LeftWorkshopBookingSection />
        <RightWorkshopBookingSection />
    </div>
  );
};

export default CarWorkshopBookingSection1;