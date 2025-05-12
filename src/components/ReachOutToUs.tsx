import { useState } from "react";
import contactus_img from "../assets/contactus_img.jpg";

const ReachOutToUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors : any = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be at least 10 digits and numeric.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Submission:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="pt-32 pb-14 px-4 flex justify-center font-montserrat flex-wrap gap-10">
      <div className="w-full sm:w-[80%] md:w-[45%] lg:w-1/3 flex flex-col">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;Reach out to us&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-4xl font-semibold mt-4">Contact Us</div>

        <div className="flex w-full gap-x-4">
          <div className="flex flex-col mt-4 w-1/2">
            <div className="text-[#555454] text-base font-bold">Name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`border-[1px] p-4 rounded-lg mt-2 placeholder:text-[#67696d] ${
                errors?.name ? "border-red-500" : "border-[#dbdada]"
              }`}
            />
            {errors?.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className="flex flex-col mt-4 w-1/2">
            <div className="text-[#555454] text-base font-bold">Phone</div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className={`border-[1px] p-4 rounded-lg mt-2 placeholder:text-[#67696d] ${
                errors.phone ? "border-red-500" : "border-[#dbdada]"
              }`}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-[#555454] text-base font-bold">Email</div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`border-[1px] p-4 rounded-lg mt-2 placeholder:text-[#67696d] ${
              errors.email ? "border-red-500" : "border-[#dbdada]"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-[#555454] text-base font-bold">Message For Us</div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here.."
            className={`border-[1px] p-4 rounded-lg mt-2 placeholder:text-[#67696d] ${
              errors.message ? "border-red-500" : "border-[#dbdada]"
            }`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          onClick={handleSubmit}
          className="text-base font-bold bg-[#ee2d33] py-4 px-10 w-fit mt-4 text-white"
        >
          Contact Now
        </button>
      </div>

      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[40%]">
        <img src={contactus_img} alt="Contact Us" className="w-full h-[35rem]" />
      </div>
    </div>
  );
};

export default ReachOutToUs;
