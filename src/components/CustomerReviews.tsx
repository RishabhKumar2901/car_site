import customer_reviews from "../assets/customer_reviews.png";
import inverted_comma from "../assets/inverted_comma.svg";
import { customerReviewsData } from "../static/customerReviewsData";

const CustomerReviews = () => {
  return (
    <div className="hidden md:flex justify-center my-20 ml-5 font-montserrat space-x-48 bg-[#fefffe]">
      <div className="w-1/2 flex justify-end items-center bg-[#f4f5f4] relative py-20">
        <img
          src={customer_reviews}
          alt="Reviews"
          className="w-[23.4rem] h-[23.4rem] absolute -right-28"
        />
      </div>

      <div className="flex flex-col w-7/12 py-20 pr-32">
        <div className="font-roboto text-lg text-[#ed252d] font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;What Do Our Clients
          Say?&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-[#222222] text-4xl font-semibold mt-4">
          Customer Reviews
        </div>

        <div className="flex overflow-x-auto overflow-y-hidden space-x-10 pr-4 h-auto mt-4 pb-6">
          {customerReviewsData?.map((item, index) => (
            <div
              className="min-w-[20rem] max-w-[20rem] text-right mt-8 border-[1.5px] border-dashed border-[#cdcccd] pt-10 pb-12 px-10 relative rounded-bl-2xl"
              key={index}
            >
              <div className="text-[#727372]">{item?.review}</div>
              <div className="mt-6 text-lg font-semibold text-[#ed1d25]">
                {item?.by}
              </div>
              <div className="text-[#727372] mt-1">{item?.from}</div>
              <div className="bg-[#222222] absolute -bottom-6 right-8 p-4">
                <img
                  src={inverted_comma}
                  alt="Inverted Comma"
                  className="w-5 h-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
