import logo from "../assets/white_logo.png";
import { footerData } from "../static/footerData";

const Footer = () => {
  return (
    <div className="bg-[#1e1e1f] font-montserrat text-base font-normal">
      <div className="pt-12 px-5 md:px-0 flex justify-center md:space-x-10 flex-wrap">
        <div className="w-full md:w-1/3">
          <img src={logo} alt="Logo" className="w-60 h-16" />
          <div className="text-white mt-4">{footerData?.description}</div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="text-[#ed1c24] mt-4">{footerData?.address1}</div>
          <div className="text-white mt-1">{footerData?.address2}</div>
          <div className="mt-4">
            <span className="text-[#ed1c24]">Email:&nbsp;</span>
            <span className="text-white">{footerData?.email}</span>
          </div>
          <div className="mt-1">
            <span className="text-[#ed1c24]">Phone:&nbsp;</span>
            <span className="text-white">{footerData?.phoneNumber1}</span>
            {footerData?.phoneNumber2 && (
              <>
                <span className="text-[#ed1c24]">,&nbsp;</span>
                <span className="text-white">{footerData?.phoneNumber2}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full mt-10">
        <div
          className="text-white mt-4 w-11/12 py-6 px-10 bg-[#ed1d25] text-sm"
          style={{
            clipPath: "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {footerData?.copyright}
        </div>
      </div>
    </div>
  );
};

export default Footer;
