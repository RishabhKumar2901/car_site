import contactSupport_img from "../../assets/contact_support.svg";

const ContactSupport = () => {
  return (
    <div className="flex flex-col items-start relative">
      <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center">
        //&nbsp;&nbsp;&nbsp;&nbsp;Contact Support&nbsp;&nbsp;&nbsp;&nbsp;//
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 font-montserrat">
        Have Any Questions?
      </div>

      <div
        className="bg-[#fff] rounded-bl-3xl py-16 pl-10 pr-10 mt-10 relative"
        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, .1)" }}
      >
        <a
          className="absolute min-w-80 md:top-[48%] lg:top-[44.3%] text-center -right-7 translate-x-1/2 -rotate-90 bg-[#ed1c24] text-white px-8 py-3 text-xl font-light"
          href="/getintouch"
        >
          Get You Tech Now!
        </a>

        <div className="flex gap-5 border-b-2 border-[#f4f5f4] pb-5">
          <div className="bg-[#ebeaea] h-fit p-4 rounded-t-full rounded-r-full">
            <img
              src={contactSupport_img}
              alt="Contact Support"
              className="w-9 h-9"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-normal text-base text-[#555] font-montserrat tracking-wider">
              For Any Inquiries Call Now!
            </div>
            <a
              className="font-semibold text-3xl font-montserrat tracking-wider"
              href="tel:9911020209"
            >
              9911-020-209
            </a>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a
            className="text-xl font-light text-[#ed1c24]"
            href="mailto: support@vehiclecare.in?subject=Need Help"
          >
            support@vehiclecare.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
