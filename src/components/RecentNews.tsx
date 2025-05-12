import { recentNewsData } from "../static/recentNewsData";

const RecentNews = () => {
  return (
    <div className="pt-32 pb-24 w-full flex flex-col items-center justify-center">
      <div className="w-[95%] xl:w-[80%] flex flex-col items-center">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;VehicleCare In The
          Press&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-4xl font-semibold mt-4 font-montserrat mb-10">
          Recent News
        </div>

        <div className="flex flex-wrap gap-x-14 gap-y-20 justify-center">
          {recentNewsData?.map((item, index) => (
            <div
              className="flex flex-col py-3 px-8 mt-6 w-[90%] sm:w-[70%] md:w-[47%] lg:w-[30%] cursor-pointer bg-[#fefeff] relative h-fit"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,.1)" }}
              key={index}
            >
              <a href={item?.url}>
                <img
                  src={item?.image}
                  alt={`News${index}`}
                  className="rounded-xl w-full h-52 absolute -top-10 -left-5"
                />
              </a>
              <div className="mt-48 text-lg font-semibold text-[#222222] uppercase">
                <span>\</span>&nbsp;
                <span className="text-[#ed1c24]">\</span>&nbsp; {item?.news}
              </div>
              <a
                className="border border-[#7c7d7d] py-[0.6rem] px-4 text-[#7c7d7d] text-sm mt-4 mb-6 whitespace-nowrap w-fit"
                href={item?.url}
              >
                <span>{">>"}</span>&nbsp;&nbsp;&nbsp;READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
