import { useNavigate } from "react-router-dom";
import location_img from "../../assets/location_img.svg";
import { workshopPartnersData } from "../../static/WorkshopPartnersData/workshopPartnersData";
import workshopContact_img1 from "../../assets/workshopContact_img1.png";
import workshopContact_img2 from "../../assets/workshopContact_img2.png";
import workshopContact_img3 from "../../assets/workshopContact_img3.png";

const WorkshopPartners = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 flex flex-col items-center px-4">
      <div className="text-2xl md:text-3xl font-medium text-center">
        Our Workshop Partners
      </div>

      {workshopPartnersData?.map((item, index) => (
        <div
          className="flex flex-col w-full md:w-[90%] lg:w-[70%] mt-10"
          key={index}
        >
          <div className="text-2xl md:text-3xl font-medium">{item?.state}</div>

          <div className="flex flex-wrap gap-4 mt-8 border-b pb-10">
            {item?.workshops?.map((workshop, workshopIndex) => (
              <div
                className="flex flex-col w-full sm:w-[48%] lg:w-[30%] border rounded overflow-hidden"
                key={workshopIndex}
              >
                <div
                  className="text-sm text-[#007BFF] px-4 py-2 font-medium bg-[#f6f6f7] border-b border-black w-full cursor-pointer"
                  onClick={() => navigate("/workshop-booking", {state: workshop})}
                >
                  {workshop?.name}
                </div>
                <div className="flex flex-col px-4 py-3 mt-2">
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src={workshopContact_img1}
                      alt="Contact Workshop"
                      className="w-5 h-5 mt-1"
                    />
                    <div className="text-sm text-[#212529]">{workshop?.address1}</div>
                  </div>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src={workshopContact_img2}
                      alt="Contact Workshop"
                      className="w-5 h-5 mt-1"
                    />
                    <div className="text-sm text-[#212529]">{workshop?.address2}</div>
                  </div>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src={workshopContact_img3}
                      alt="Contact Workshop"
                      className="w-5 h-5 mt-1"
                    />
                    <a
                      href={`tel:${workshop?.mobileno}`}
                      className="text-sm text-[#007bff]"
                    >
                      {workshop?.mobileno}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      className="bg-[#007bff] text-white rounded text-sm py-2 px-4"
                      href={workshop?.mobileno}
                    >
                      Call
                    </a>

                    <a
                      className="bg-[#007bff] text-white rounded text-sm py-2 px-4 flex items-center"
                      href={workshop?.location}
                    >
                      Map{" "}
                      <img
                        src={location_img}
                        alt="Location"
                        className="w-3 h-3 ml-2"
                      />
                    </a>
                  </div>

                  <button
                    className="bg-[#dc3545] text-white text-sm mt-4 p-2 rounded"
                    onClick={() => navigate("/workshop-booking", {state: workshop})}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopPartners;