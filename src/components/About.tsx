import { aboutUsData } from "../static/aboutUsData";
import { parseFormattedText } from "../utils/parseFormattedText";

const About = () => {
  return (
    <div className="pt-32 pb-24 w-full flex flex-col items-center justify-center">
      <div className="w-[95%] xl:w-[70%] flex flex-col items-center">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center">
          //&nbsp;&nbsp;&nbsp;&nbsp;ABOUT US&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 font-montserrat text-center">
          SMART SOLUTIONS FOR YOUR NEEDS
        </div>

        {aboutUsData?.solutions?.map((item, index) => (
          <div
            className={`flex flex-col md:flex-row items-center gap-6 w-full ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            key={index}
          >
            <img
              src={item?.image}
              alt="Aboutus"
              className="w-full sm:w-80 md:w-96 h-auto"
            />
            <div
              className="text-base text-[#747474] leading-[1.8rem] md:w-9/12 pt-5 pb-7 px-4 md:px-7 text-left h-fit shadow-md"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,.1)" }}
            >
              {parseFormattedText(item?.text)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-4 md:px-10 mt-20 w-full xl:w-[75%]">
        <div className="w-full lg:w-[50%]">
          <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center lg:text-left">
            //&nbsp;&nbsp;&nbsp;&nbsp;We Provide&nbsp;&nbsp;&nbsp;&nbsp;//
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 font-montserrat leading-[2.5rem] text-center lg:text-left">
            {aboutUsData?.provide?.heading}
          </div>
          <div className="text-base text-[#747474] mt-4 leading-[1.8rem] text-center lg:text-left">
            {aboutUsData?.provide?.description}
          </div>
          {aboutUsData?.provide?.data?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mt-4 text-sm sm:text-base">
                <div className="font-bold">{item?.skill}</div>
                <div className="font-bold">{item?.percentage}%</div>
              </div>
              <div className="border-[1px] p-0.5 mt-2 border-[#bbbbbb]">
                <div
                  className="bg-[#ed1d25] h-1.5"
                  style={{ width: `${item?.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <img
          src={aboutUsData?.provide?.image}
          alt="AboutUs"
          className="w-full sm:w-[60%] h-auto"
        />
      </div>
    </div>
  );
};

export default About;