import workshopContact_img1 from "../../../assets/workshopContact_img1.png";
import workshopContact_img2 from "../../../assets/workshopContact_img2.png";
import workshopContact_img3 from "../../../assets/workshopContact_img3.png";
import workshopContact_img4 from "../../../assets/workshopContact_img4.png";
import workshopContact_img5 from "../../../assets/workshopContact_img5.png";

export const leftWorkshopBookingSectionData = {
  title: "VehicleCare - Car Experts Automobiles LLP",
  contactDetails: [
    {
      image: workshopContact_img1,
      text: "Plot No. 9, sector-3b, Bodla, Sector8, Avas Vikas Colony, Sikandra Agra, 282007",
    },
    {
      image: workshopContact_img2,
      text: "Avas Vikas Colony ,Agra ,Uttar Pradesh",
    },
    { image: workshopContact_img3, text: "9355302514", link: "tel:9355302514" },
  ],

  mobileNo: "tel:9355302514",
  location: "https://www.google.com/maps/place/test,test",

  businessHour: {
    heading: "Business Hour",
    image: workshopContact_img4,
    data: [
      {
        day: "Sun",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Mon",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Tue",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Wed",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Thu",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Fri",
        time: "09:00AM - 18:00PM",
      },
      {
        day: "Sat",
        time: "09:00AM - 18:00PM",
      },
    ],
  },

  paymentOptions: {
    heading: "Payment Options",
    image: workshopContact_img5,
    options: [
      "Cash",
      " Debit Card",
      "Paytm",
      " Master Card",
      "Visa",
      " Bhim UPI",
    ],
  },
};
