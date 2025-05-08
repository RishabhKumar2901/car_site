import { useState } from "react";
import inverted_comma from "../assets/inverted_comma.svg";
import star from "../assets/star.svg";
import { reviewData } from "../static/reviewData";

const Testimonial = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleText = (index: number) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const getPreview = (text: string) => {
    const preview = text.split(" ").slice(0, 9).join(" ");
    return preview.length < text.length ? `${preview}...` : null;
  };

  return (
    <>
      <div className="text-4xl font-semibold pt-32 text-center">
        Testimonial
      </div>

      <div className="w-full flex flex-wrap justify-center mt-16 text-center text-lg gap-x-6 gap-y-20 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 px-4 md:px-0">
        {reviewData?.map((item, index) => (
          <div
            className="w-full sm:w-[48%] md:w-[32%] lg:w-[24%] tracking-wide py-6 px-6 relative flex flex-col items-center justify-center"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,.1)" }}
            key={index}
          >
            <div className="bg-[#ec1c25] absolute -top-6 left-1/2 transform -translate-x-1/2 p-4">
              <img
                src={inverted_comma}
                alt="Inverted Comma"
                className="w-5 h-5"
              />
            </div>
            <div className="text-[#7c7c7c] mt-10">
              {expandedIndices.includes(index)
                ? item?.review
                : getPreview(item?.review) ?? item?.review}
              {getPreview(item?.review) && (
                <span
                  onClick={() => toggleText(index)}
                  className="cursor-pointer"
                >
                  {expandedIndices.includes(index)
                    ? " show less"
                    : " read more"}
                </span>
              )}
            </div>
            <div className="flex justify-center mt-4">
              {[...Array(item?.rating)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={star}
                  alt={`Star ${starIndex + 1}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <div className="mt-4 text-[#ee363c] text-xl font-medium">
              {item?.by}
            </div>
            <div className="bg-black w-11/12 h-2 absolute -bottom-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
