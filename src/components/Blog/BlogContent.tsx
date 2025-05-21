import blogAuthor_img from "../../assets/blogAuthor_img.svg";
import blogPostDate_img from "../../assets/blogPostDate_img.svg";
import authorDatePartition_img from "../../assets/authorDatePartition_img.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { blogContentData } from "../../static/BlogData/blogContentData";
import left_arrow from "../../assets/left_arrow.svg";
import right_arrow from "../../assets/right_arrow.svg";

const BlogContent = () => {
  const location: any = useLocation();
  const contentData = location?.state?.data || blogContentData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getShortContent = (text: string, wordLimit = 18) => {
    const words = text?.split(" ");
    const isTruncated = words.length > wordLimit;
    const shortText = words.slice(0, wordLimit).join(" ");
    return { shortText, isTruncated };
  };

  const totalPages = Math.ceil(contentData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = contentData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="pt-32 pb-20 flex flex-col items-center">
      <div className="w-[90%] flex flex-col gap-6">
        {location?.state?.category && (
          <div className="text-2xl font-semibold text-[#374151]">
            Category : {location?.state?.category}
          </div>
        )}

        {paginatedData?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-2 bg-[#fefeff] border border-[#ece9e7] rounded-sm"
            style={{ boxShadow: "rgba(44, 62, 80, 0.45) 0px 15px 18px -15px" }}
          >
            {item?.image && (
              <div className="relative w-full md:w-[41.794rem] h-60 overflow-hidden rounded-t-sm md:rounded-l-sm md:rounded-tr-none">
                <img
                  src={item?.image}
                  alt="Post"
                  className="w-full h-full absolute object-cover hover:scale-110 duration-500 ease-in-out"
                />
              </div>
            )}

            <div className="flex flex-col p-6 w-full md:w-6/12">
              <div className="flex flex-wrap gap-3">
                {item?.tags?.map((tag: any, tagIndex: number) => (
                  <a
                    key={tagIndex}
                    href={tag?.link}
                    className="text-[#dc2626] hover:text-[#b91c1c] text-xs font-bold cursor-pointer"
                  >
                    {tag?.name}
                  </a>
                ))}
              </div>

              <a
                href={item?.blogLink}
                className="text-xl font-bold mt-2 cursor-pointer hover:text-[#dc2626] transition ease-in"
              >
                {item?.title}
              </a>

              {(() => {
                const { shortText, isTruncated } = getShortContent(
                  item?.content
                );
                return (
                  <div className="text-base font-normal text-[#6b7280] mt-2 border-b border-dashed pb-10">
                    {shortText}
                    {isTruncated && (
                      <a href={item?.blogLink} className="ml-1">
                        ...
                      </a>
                    )}
                  </div>
                );
              })()}

              <div className="flex flex-wrap items-center gap-2 pt-4 text-xs text-[#6b7280]">
                <img
                  src={blogAuthor_img}
                  alt="Author"
                  className="w-[0.656rem] h-[0.656rem]"
                />
                <a
                  href={item?.author?.link}
                  className="hover:text-[#dc2626] cursor-pointer"
                >
                  {item?.author?.name}
                </a>
                <img
                  src={authorDatePartition_img}
                  alt="|"
                  className="w-[0.8rem] h-[0.8rem]"
                />
                <div className="flex items-center gap-2">
                  <img
                    src={blogPostDate_img}
                    alt="Date"
                    className="w-[0.656rem] h-[0.656rem]"
                  />
                  <a
                    href={item?.postDate?.link}
                    className="hover:text-[#dc2626] cursor-pointer"
                  >
                    {item?.postDate?.date}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex mt-10 gap-3">
          <button
            className="py-1 px-2 border rounded-md disabled:opacity-40 hover:border-[1.4px] hover:border-[#ed1d25]"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <img src={left_arrow} alt="Left Arrow" className="w-6 h-6" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-4 py-1 border rounded-md hover:border-[1.4px] font-normal hover:border-[#ed1d25] ${
                currentPage === i + 1
                  ? "bg-[#ed1d25] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="py-1 px-2 border rounded-md disabled:opacity-40 hover:border-[1.4px] hover:border-[#ed1d25]"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={right_arrow} alt="Right Arrow" className="w-6 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;