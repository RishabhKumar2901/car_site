import { useEffect, useRef, useState } from "react";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
import { bookCarServiceSliderData } from "../static/bookCarServiceSliderData";

const ITEM_WIDTH = 43.563;
const ITEM_HEIGHT = 22.813;

const BookCarServiceSlider: React.FC = () => {
  const [logos, setLogos] = useState(bookCarServiceSliderData);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const hasUserInteracted = useRef(false);

  const clearAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const shiftLeft = () => {
    setIsAnimating(true);
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(-${ITEM_WIDTH}rem)`;
    }

    setTimeout(() => {
      setIsAnimating(false);
      setLogos((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first];
      });
      setCurrentIndex((prev) => (prev + 1) % bookCarServiceSliderData.length);

      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = "translateX(0)";
      }
    }, 500);
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (!hasUserInteracted.current) shiftLeft();
    }, 3000);

    return () => {
      clearAutoScroll();
    };
  }, [logos]);

  const manualNext = () => {
    if (!isAnimating) {
      hasUserInteracted.current = true;
      clearAutoScroll();
      shiftLeft();
    }
  };

  const manualPrev = () => {
    if (isAnimating) return;

    hasUserInteracted.current = true;
    clearAutoScroll();
    setIsAnimating(true);

    setLogos((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
    setCurrentIndex((prev) =>
      (prev - 1 + bookCarServiceSliderData.length) % bookCarServiceSliderData.length
    );

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${ITEM_WIDTH}rem)`;
    }

    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
        trackRef.current.style.transform = "translateX(0)";
      }

      setTimeout(() => setIsAnimating(false), 500);
    }, 20);
  };

  const handleDotClick = (targetIdx: number) => {
    hasUserInteracted.current = true;
    clearAutoScroll();
    const shift = (targetIdx - currentIndex + bookCarServiceSliderData.length) % bookCarServiceSliderData.length;
    let updated = [...logos];
    for (let i = 0; i < shift; i++) {
      const first = updated.shift();
      if (first) updated.push(first);
    }
    setLogos(updated);
    setCurrentIndex(targetIdx);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`relative overflow-hidden bg-white w-[${ITEM_WIDTH}rem] h-[${ITEM_HEIGHT}rem] rounded-xl`}
        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
      >
        <button
          onClick={manualPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={left_arrow} alt="Left" className="w-4 h-4" />
        </button>

        <div className="overflow-hidden w-full h-full">
          <div
            className="flex"
            ref={trackRef}
            style={{ width: `${logos.length * ITEM_WIDTH}px` }}
          >
            {logos?.map((logo, idx) => (
              <div
                key={`${logo?.name}-${idx}`}
                className="flex items-center justify-center"
                style={{
                  width: `${ITEM_WIDTH}rem`,
                  height: `${ITEM_HEIGHT}rem`,
                  flexShrink: 0,
                }}
              >
                <img
                  src={logo?.src}
                  alt={logo?.name}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={manualNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={right_arrow} alt="Right" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2 absolute bottom-5">
        {bookCarServiceSliderData.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex % bookCarServiceSliderData.length === idx
                ? "scale-150 bg-gray-400"
                : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookCarServiceSlider;
