import React, { useState, useRef, useEffect } from "react";
import full_logo from "../assets/full_logo.png";
import { navbarData } from "../static/navbarData";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#f9f9fb] w-full py-4 flex justify-around items-center font-montserrat border-b-[1px] border-[#f3f2f2] fixed z-50 top-0">
        <a href="#">
          <img src={full_logo} alt="Full Logo" className="w-[10.5rem] h-[2.6rem]" />
        </a>
        <div className="text-sm font-semibold justify-between items-center w-2/5 hidden xl:flex">
          <a className="cursor-pointer hover:text-[#ec262e]" href="#">
            Car Service
          </a>
          <div className="cursor-pointer hover:text-[#ec262e]" onClick={() => navigate("/insurance-claim")}>
            Insurance Claim
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex justify-center items-center group"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span className="group-hover:text-[#ec262e]">Major Brands</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-black group-hover:fill-[#ec262e]"
              >
                <path d="M6.5,8.5l6,7l6-7H6.5z" />
              </svg>
            </div>
            {showDropdown && (
              <div className="absolute top-10 -translate-x-6 w-40 border bg-white rounded-lg shadow-lg flex flex-col z-50">
                {navbarData?.map((item, index) => (
                  <a
                    key={index}
                    className="font-montserrat text-center cursor-pointer text-sm font-medium py-3"
                    href={item?.url}
                  >
                    {item?.brand}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a className="cursor-pointer hover:text-[#ec262e]" href="#">
            Blog
          </a>
          <a className="cursor-pointer hover:text-[#ec262e]" href="#">
            VehicleAI Labs
          </a>
          <button className="bg-[#ed1d25] text-white p-3 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
