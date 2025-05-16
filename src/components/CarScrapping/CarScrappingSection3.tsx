import vehicleRecycle_img from "../../assets/vehicleRecycle_img.png";

const CarScrappingSection3 = () => {
  return (
    <div className="flex justify-center w-full mt-20 bg-[#e7f9ff] pb-10 flex-wrap">
      <div className="text-4xl font-montserrat font-normal text-[#767677] w-[90%] md:w-1/2 pt-3 tracking-wider leading-[1.5]">
        Preserving The Past, Protecting The Future Pioneering : End Of Life
        Vehicle Recycling
      </div>
      <img
        src={vehicleRecycle_img}
        alt="Banner"
        className="w-[90%] md:w-[17.531rem] md:h-[12.142rem] rounded-xl mt-5 md:mt-0"
      />
    </div>
  );
};

export default CarScrappingSection3;
