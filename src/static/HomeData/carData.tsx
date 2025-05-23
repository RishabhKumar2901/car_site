import agra_img from "../../assets/agra_img.jpg";

export const carData: any = {
  brands: [
    { name: "BMW", imageUrl: agra_img },
    { name: "Honda", imageUrl: agra_img },
    { name: "Hyundai", imageUrl: agra_img },
  ],
  models: {
    BMW: [
      { name: "X5", imageUrl: agra_img },
      { name: "3 Series", imageUrl: agra_img },
    ],
    Honda: [
      { name: "Civic", imageUrl: agra_img },
      { name: "Accord", imageUrl: agra_img },
    ],
    Hyundai: [
      { name: "Creta", imageUrl: agra_img },
      { name: "Verna", imageUrl: agra_img },
    ],
  },
  variants: {
    BMW: {
      X5: [
        { name: "Petrol", imageUrl: agra_img },
        { name: "Diesel", imageUrl: agra_img },
      ],
      "3 Series": [
        { name: "Petrol", imageUrl: agra_img },
        { name: "EV", imageUrl: agra_img },
      ],
    },
    Honda: {
      Civic: [
        { name: "CNG", imageUrl: agra_img },
        { name: "Petrol", imageUrl: agra_img },
      ],
      Accord: [
        { name: "Hybrid", imageUrl: agra_img },
        { name: "Petrol", imageUrl: agra_img },
      ],
    },
    Hyundai: {
      Creta: [
        { name: "Diesel", imageUrl: agra_img },
        { name: "Petrol", imageUrl: agra_img },
      ],
      Verna: [
        { name: "EV", imageUrl: agra_img },
        { name: "CNG", imageUrl: agra_img },
      ],
    },
  },
};