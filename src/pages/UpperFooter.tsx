import { upperFooterData } from "../static/upperFooterData";

const UpperFooter = () => {

  return (
    <div className="bg-[#393839] font-montserrat text-base font-light">
      <div className="py-12 px-8 md:px-0 flex justify-center md:space-x-4 flex-wrap">
        {upperFooterData?.map((data, index) => (
          <div className="w-full md:w-1/6">
            <div
              className="text-white mt-4 flex items-center text-xl font-semibold mb-4"
              key={index}
            >
              {" "}
              <div className="bg-[#ed1d25] w-2 h-2 mr-5"></div>
              {data?.title}
            </div>
            {data?.page?.map((pageItem, pageIndex) => (
              <div className="text-white cursor-pointer mt-2" key={pageIndex}>
                <a href={pageItem?.link}>{pageItem?.to}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperFooter;
