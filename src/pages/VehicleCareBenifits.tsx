import benifit1 from "../assets/benifit1.png";
import tick_icon from "../assets/tick_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import tick_icon_red from "../assets/tick_icon_red.svg";

const VehicleCareBenifits = () => {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <div className="flex space-x-5 items-center text-center">
        <div className="text-3xl font-[700] flex flex-wrap w-1/4 mt-6 text-[#282c30] px-8">
          Vehicle Care Benifits
        </div>
        <div className="text-lg font-bold bg-[#6c747c] py-5 px-8 text-white">
          Local Mechanic
        </div>
        <div className="text-lg font-bold bg-[#6c747c] py-5 px-8 text-white">
          Authorized Service Center
        </div>
        <div className="text-lg font-bold bg-[#ed1d25] py-5 px-8 text-white">
          Vehiclecare
        </div>
      </div>
      <div className="flex items-center text-center pr-16">
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] py-3 px-16">
          <img src={benifit1} alt="Benifit" className="w-5 h-5" />
          &nbsp;Free pick up and drop
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] py-2.5 px-28">
          <img src={tick_icon} alt="Benifit" className="w-6 h-7" />
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] py-3.5 px-40">
          <img src={cross_icon} alt="Benifit" className="w-6 h-5" />
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] py-2.5 px-28">
          <img src={tick_icon_red} alt="Benifit" className="w-6 h-7" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCareBenifits;
