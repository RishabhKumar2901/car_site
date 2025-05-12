import { contactUsData } from "../static/contactUsData";

const WhoWeAre = () => {
  return (
    <div className="flex justify-center bg-slate-100 pt-24 pb-14 mb-24">
      <div className="w-[80%]">
        <div className="text-4xl text-[#ed1c24] font-semibold">Who We Are:</div>
        <div className="mt-4 text-[#777] text-sm">
          {contactUsData?.whoweare}
        </div>
        <div className="text-2xl font-semibold text-[#202429] mt-4">
          Follow Us On:
        </div>
        <div className="flex space-x-3 mt-4">
          {contactUsData?.followData?.map((item, index) => (
            <a key={index} href={item?.url}>
              <img src={item?.icon} alt={`Contact${index}`} className="w-12 h-12" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
