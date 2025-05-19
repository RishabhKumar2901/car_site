import serviceSteps_img1 from "../../assets/serviceSteps_img1.png";
import serviceSteps_img2 from "../../assets/serviceSteps_img2.png";
import serviceSteps_img3 from "../../assets/serviceSteps_img3.png";
import serviceSteps_img4 from "../../assets/serviceSteps_img4.png";

export const serviceStepsAndPriceData = {
  heading1: "Service In 4 Easy Steps",
  serviceSteps: [
    {
      image: serviceSteps_img1,
      heading: "Select Your Car",
      text: "Choose from our portfolio of cars.",
    },
    {
      image: serviceSteps_img2,
      heading: "Free Pick-Up & Drop",
      text: "Get free pick up & drop on all booked services.",
    },
    {
      image: serviceSteps_img3,
      heading: "Live Tracking",
      text: "Get real-time updates on your car location & status.",
    },
    {
      image: serviceSteps_img4,
      heading: "30 Days Warranty",
      text: "Stay assured. Get 30 days warranty on all car services.",
    },
  ],

  heading2: `##Car Service ## %%Price List in India 2025%%`,
  table: {
    headers: ["Car Service List", "Price Starts From (₹)"],
    data: [
      {
        servicName: "General Service",
        price: "2199",
      },
      {
        servicName: "Car Inspection",
        price: "499",
      },
      {
        servicName: "RSA( Towing service )",
        price: "999",
      },
      {
        servicName: "RSA( Jump start )",
        price: "499",
      },
      {
        servicName: "Denting & painting",
        price: "2000",
      },
      {
        servicName: "Full Body Denting & Painting",
        price: "20000",
      },
      {
        servicName: "Dry Denting",
        price: "300",
      },
    ],
  },
};
