import { useState } from "react";
import tick_icon_red from "../assets/tick_icon_red.svg";
import { servicesDashboardData } from "../static/servicesDashboardData";

const ServiceCard = ({ image, title, price, features }: any) => (
  <div className="relative bg-white shadow-md p-6 rounded-md w-full">
    <div className="absolute -left-20 top-6">
      <div className="bg-gray-100 p-2 rounded">
        <img src={image} alt="Icon" className="w-12 h-12" />
      </div>
    </div>

    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-xl font-montserrat">{title}</h3>
      <span className="text-red-600 font-semibold font-montserrat">
        Rs {price}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
      {features?.map((f: string, i: number) => (
        <div key={i} className="flex items-center gap-1">
          <img
            src={tick_icon_red}
            alt="Authorized Service Center"
            className={"w-3 h-3"}
          />
          <span className="text-base text-[#555] font-montserrat">{f}</span>
        </div>
      ))}
    </div>
    <span className="absolute -left-4 top-10 w-0 h-0 border-y-[1rem] border-r-[1rem] border-y-transparent border-r-white" />

    <div className="flex justify-end">
      <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Add To Cart +
      </button>
    </div>
  </div>
);

const ServicesDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Periodic Car Services"
  );

  return (
    <div className="bg-[#f4f0ee] p-8 flex flex-col gap-6 pt-32">
      <div className="flex justify-center space-y-6">
        <div className="flex flex-wrap justify-center gap-4 mb-6 w-2/3">
          {servicesDashboardData?.categories?.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded transition-colors duration-200
                  ${
                    selectedCategory === cat
                      ? "bg-black text-white border-black"
                      : "text-black border-black hover:bg-black hover:text-white"
                  }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center flex-wrap">
        <div className="flex flex-col w-fit pl-20 pr-5 gap-8 max-h-96 overflow-auto">
          {servicesDashboardData?.services?.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="w-full md:w-1/4 bg-white rounded-md shadow-md p-6 h-fit mt-10 xl:mt-0">
          <h2 className="text-2xl font-montserrat font-semibold mb-4">
            Your Cart
          </h2>
          <div className="border p-4 flex items-center gap-4 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Car"
              className="w-16 h-12 object-cover"
            />
            <div>
              <div className="font-semibold">Maruti Suzuki</div>
              <div className="text-sm text-gray-600">BALENO Petrol</div>
            </div>
            <button className="ml-auto text-gray-600 text-sm">Change</button>
          </div>
          <div className="text-red-600 text-sm mb-2">"NO ITEMS IN CART"</div>
          <div className="flex justify-between border-t border-b py-2 mb-4">
            <div className="text-sm text-red-600 font-bold">TOTAL</div>
            <div className="text-sm">Rs. 0</div>
          </div>
          <button className="w-fit bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-not-allowed">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboard;
