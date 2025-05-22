import React, { useState, useRef, useEffect } from "react";
import full_logo from "../assets/full_logo.png";
import { navbarData } from "../static/navbarData";
import { useNavigate } from "react-router-dom";
import { City } from "../static/HomeData/cityData";
import CityModal from "./Home/CityModal";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

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
        <div onClick={() => navigate("/")}>
          <img
            src={full_logo}
            alt="Full Logo"
            className="w-[10.5rem] h-[2.6rem]"
          />
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => setShowModal(true)}>
          <div className="text-[#ec262e] font-semibold">
          {selectedCity?.name || "Choose City"}</div>&nbsp;
          <div className="w-4 h-4 rotate-90">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                fill="#ec262e"
                stroke="#ec262e"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>
        <div className="text-sm font-semibold justify-between items-center w-2/5 hidden xl:flex">
          <div
            className="cursor-pointer hover:text-[#ec262e]"
            onClick={() => navigate("/car-service")}
          >
            Car Service
          </div>
          <div
            className="cursor-pointer hover:text-[#ec262e]"
            onClick={() => navigate("/insurance-claim")}
          >
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
                  <div
                    key={index}
                    className="font-montserrat text-center cursor-pointer text-sm font-medium py-3"
                    onClick={() => navigate(item?.url)}
                  >
                    {item?.brand}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="cursor-pointer hover:text-[#ec262e]"
            onClick={() => navigate("/blog")}
          >
            Blog
          </div>
          <div
            className="cursor-pointer hover:text-[#ec262e]"
            onClick={() => navigate("/ai-labs")}
          >
            VehicleAI Labs
          </div>
          <button className="bg-[#ed1d25] text-white p-3 rounded-md">
            Login
          </button>
        </div>
      </div>
      {showModal && (
        <CityModal
          onClose={() => setShowModal(false)}
          onSelectCity={(city) => setSelectedCity(city)}
        />
      )}
    </div>
  );
};

export default Navbar;