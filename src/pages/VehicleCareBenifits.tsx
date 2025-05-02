import tick_icon from "../assets/tick_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import tick_icon_red from "../assets/tick_icon_red.svg";
import { vehicleCareBenifitsData } from "../static/vehicleCareBenifitsData";

const VehicleCareBenifits = () => {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <div className="flex items-center text-center w-3/4 justify-center ml-2 bg-[#fefffe]">
        <div className="text-3xl font-[700] text-[#282c30] flex items-center border-[1px] border-[#f9f9fb] py-3 px-8 w-5/6 justify-center">
          Vehicle Care <br /> Benifits
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f9f9fb] pt-3 pb-4 px-2 w-4/12">
          <div className="text-lg font-bold bg-[#6c747c] py-5 px-[3.7rem] text-nowrap text-white">
            Local Mechanic
          </div>
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f9f9fb] pt-3 pb-4 px-2 w-2/5">
          <div className="text-lg font-bold bg-[#6c747c] py-5 px-[3.42rem] text-white text-nowrap">
            Authorized Service Center
          </div>
        </div>
        <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f9f9fb] pt-3 pb-4 px-2 w-1/4">
          <div className="text-lg font-bold bg-[#ed1d25] py-5 px-[3.89rem] text-white text-nowrap">
            Vehiclecare
          </div>
        </div>
      </div>

      {vehicleCareBenifitsData?.map((item, index) => (
        <div
          className="flex items-center text-center w-3/4 justify-center ml-2 hover:bg-[#eceded] bg-[#fefffe]"
          key={index}
        >
          <div className="text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] py-3 px-8 w-5/6 justify-center">
            <img src={item?.imageUrl} alt="Benifit" className="w-5 h-5" />
            &nbsp;{item?.benifit}
          </div>
          <div
            className={`text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] ${
              item?.localMechanic ? "py-2.5" : "py-3.5"
            } px-28 w-4/12`}
          >
            <img
              src={item?.localMechanic ? tick_icon : cross_icon}
              alt="Benifit"
              className={item?.localMechanic ? "w-6 h-7" : "w-6 h-5"}
            />
          </div>
          <div
            className={`text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] ${
              item?.authoriedServiceCenter ? "py-2.5" : "py-3.5"
            } px-40 w-2/5`}
          >
            <img
              src={item?.authoriedServiceCenter ? tick_icon : cross_icon}
              alt="Benifit"
              className={item?.authoriedServiceCenter ? "w-6 h-7" : "w-6 h-5"}
            />
          </div>
          <div
            className={`text-base font-[700] text-[#282c30] flex items-center border-[1px] border-[#f1f3f2] ${
              item?.vehicleCare ? "py-2.5" : undefined
            } px-28 w-1/4`}
          >
            <img
              src={item?.vehicleCare ? tick_icon_red : undefined}
              alt="Benifit"
              className={item?.vehicleCare ? "w-6 h-7" : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCareBenifits;
