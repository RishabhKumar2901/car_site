import React, { useState } from "react";
import { carData } from "../../static/HomeData/carData";

interface Props {
  onClose: () => void;
  onSave: (brand: string, model: string, variant: string) => void;
}

const CarSelectionModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [step, setStep] = useState<"brand" | "model" | "variant">("brand");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleSelect = (value: string) => {
    if (step === "brand") {
      setSelectedBrand(value);
      setStep("model");
    } else if (step === "model") {
      setSelectedModel(value);
      setStep("variant");
    } else if (step === "variant") {
      setSelectedVariant(value);
      onSave(selectedBrand!, selectedModel!, value);
      onClose();
    }
    setSearch("");
  };

  let items: { name: string; imageUrl: string }[] = [];

  if (step === "brand") {
    items = carData?.brands;
  } else if (step === "model" && selectedBrand) {
    items = carData?.models?.[selectedBrand];
  } else if (step === "variant" && selectedBrand && selectedModel) {
    items = carData?.variants?.[selectedBrand]?.[selectedModel];
  }

  const filtered = items?.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
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

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold font-montserrat">
            {step === "brand"
              ? "Select Brand"
              : step === "model"
              ? `Select Model`
              : `Select Variant`}
          </h2>
        </div>

        <input
          type="text"
          placeholder={`Search ${step}...`}
          className="w-full border rounded-md border-gray-300 px-4 py-2 mb-4 outline-none focus:border-red-500 font-montserrat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-5">
          {filtered?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleSelect(item?.name)}
            >
              <img
                src={item?.imageUrl}
                alt={item?.name}
                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover"
              />
              <span className="text-xs mt-2 text-center font-montserrat break-words">
                {item?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSelectionModal;