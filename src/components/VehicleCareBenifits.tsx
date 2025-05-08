import tick_icon from "../assets/tick_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import tick_icon_red from "../assets/tick_icon_red.svg";
import { vehicleCareBenifitsData } from "../static/vehicleCareBenifitsData";

const VehicleCareBenifits = () => {
  return (
    <div className="flex flex-col items-center font-montserrat mb-10 w-full px-2">
      <div className="flex flex-col w-full max-w-[1100px]">
        <div className="flex text-center justify-center bg-[#fefffe] w-full">
          <div className="text-xl md:text-3xl sm:text-2xl font-[700] text-[#282c30] flex items-center justify-center border border-[#f8fbfb] py-4 px-2 w-[32%]">
            Vehicle Care <br /> Benifits
          </div>
          <div className="border border-[#f8fbfb] w-[18%] flex items-center justify-center md:p-2">
            <div className="text-sm sm:text-lg font-bold bg-[#6c747c] w-full py-5 text-white text-wrap lg:text-nowrap text-center">
              Local Mechanic
            </div>
          </div>
          <div className="border border-[#f8fbfb] w-[30%] flex items-center justify-center md:p-2">
            <div className="text-sm sm:text-lg font-bold bg-[#6c747c] w-full py-5 text-white text-wrap lg:text-nowrap text-center">
              Authorized Service Center
            </div>
          </div>
          <div className="border border-[#f8fbfb] w-[20%] flex items-center justify-center md:p-2">
            <div className="text-sm sm:text-lg font-bold bg-[#ed1d25] w-full py-5 text-white text-wrap lg:text-nowrap text-center">
              <span className="hidden md:block">Vehiclecare</span>
              <span className="md:hidden">VC</span>
            </div>
          </div>
        </div>

        {vehicleCareBenifitsData?.map((item, index) => (
          <div
            className="flex justify-center items-stretch hover:bg-[#eceded] bg-[#fefffe] w-full"
            key={index}
          >
            <div className="text-base sm:text-sm font-[700] text-[#282c30] border border-[#e6e8ed] py-2.5 px-3 w-[32%] flex items-center justify-center gap-2">
              <img src={item?.imageUrl} alt="Benefit" className="w-5 h-5" />
              {item?.benifit}
            </div>
            <div className="border border-[#e6e8ed] w-[18%] flex items-center justify-center py-2.5">
              <img
                src={item?.localMechanic ? tick_icon : cross_icon}
                alt="Local Mechanic"
                className={item?.localMechanic ? "w-5 h-5" : "w-4 h-4"}
              />
            </div>
            <div className="border border-[#e6e8ed] w-[30%] flex items-center justify-center py-2.5">
              <img
                src={item?.authoriedServiceCenter ? tick_icon : cross_icon}
                alt="Authorized Service Center"
                className={item?.authoriedServiceCenter ? "w-5 h-5" : "w-4 h-4"}
              />
            </div>
            <div className="border border-[#e6e8ed] w-[20%] flex items-center justify-center py-2.5">
              {item?.vehicleCare && (
                <img src={tick_icon_red} alt="Vehiclecare" className="w-5 h-5" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleCareBenifits;
