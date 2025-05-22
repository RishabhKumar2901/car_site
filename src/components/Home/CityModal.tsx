import React, { useState } from "react";
import { City, cityData } from "../../static/HomeData/cityData";

interface Props {
  onClose: () => void;
  onSelectCity: (city: City) => void;
}

const CityModal: React.FC<Props> = ({ onClose, onSelectCity }) => {
  const [search, setSearch] = useState("");

  const filteredCities = cityData?.filter((city) =>
    city?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 sm:px-6">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-lg shadow-lg p-4 sm:p-6 overflow-y-auto relative">
        <button
          className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center font-montserrat w-full sm:w-auto">
            Choose Your City
          </h2>
          <div className="flex-1 sm:ml-4">
            <input
              type="text"
              placeholder="Search City..."
              className="w-full sm:w-fit border-b border-gray-300 px-4 py-2 outline-none focus:border-red-500 placeholder:font-montserrat"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredCities?.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                onSelectCity(city);
                onClose();
              }}
            >
              <img
                src={city?.imageUrl}
                alt={city?.name}
                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover"
              />
              <span className="text-xs mt-2 text-center font-montserrat break-words">
                {city?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityModal;
