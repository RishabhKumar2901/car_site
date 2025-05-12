import job_img from "../assets/job_img.jpg";

const GetInTouch = () => {
  return (
    <div className="pt-32 px-4 flex justify-center font-montserrat flex-wrap gap-10">
      <div className="w-full sm:w-[80%] md:w-[45%] lg:w-1/3 flex flex-col">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;Career&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-4xl font-semibold mt-4">Get in touch</div>
        <div className="text-4xl font-normal text-[#777676] mt-10">Open</div>
        <div className="text-4xl font-normal text-[#ee2d33] mt-4">
          Recruitment...
        </div>
        <button className="text-base font-bold bg-[#ee2d33] py-4 px-10 w-fit mt-4 text-white">
          Join Us
        </button>
      </div>

      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[40%]">
        <img src={job_img} alt="Job Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default GetInTouch;
