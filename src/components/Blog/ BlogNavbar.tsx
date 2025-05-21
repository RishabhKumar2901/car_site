import blog_logo from "../../assets/blog_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { blogNavbarData } from "../../static/BlogData/blogNavbarData";

const BlogNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="bg-[#f9f9fb] w-full py-4 flex justify-between px-20 items-center border-b-[1px] border-[#f3f2f2] fixed z-50 top-0">
        <div onClick={() => navigate("/")}>
          <img src={blog_logo} alt="Blog Logo" className="w-[12.291rem] h-16" />
        </div>
        <div className="text-sm font-medium text-[#6b7280] gap-5 items-center hidden xl:flex">
          {blogNavbarData?.map((item, index) => {
            const isActive = location?.pathname === item?.link;

            return (
              <div
                key={index}
                onClick={() =>
                  navigate(item?.link, {
                    state: { data: item?.data, category: item?.category },
                  })
                }
                className={`cursor-pointer hover:text-[#ec262e] ${
                  isActive ? "text-[#ec262e]" : ""
                }`}
              >
                {item.to}
              </div>
            );
          })}
          <button className="bg-[#ed1d25] text-white p-3 rounded-md font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogNavbar;
