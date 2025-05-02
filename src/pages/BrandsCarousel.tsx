import { useEffect, useRef, useState } from "react";
import { brandsCarouselData } from "../static/brandsCarouselData";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

const ITEM_WIDTH = 230;

const TrueInfiniteCarousel: React.FC = () => {
  const [logos, setLogos] = useState(brandsCarouselData);
  const [isAnimating, setIsAnimating] = useState(false);
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
      trackRef.current.style.transform = `translateX(-${ITEM_WIDTH}px)`;
    }

    setTimeout(() => {
      setIsAnimating(false);
      setLogos((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first];
      });

      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = "translateX(0)";
      }
    }, 500);
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (!hasUserInteracted.current) shiftLeft();
    }, 2000);

    return () => {
      clearAutoScroll();
    };
  }, []);

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

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${ITEM_WIDTH}px)`;
    }

    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
        trackRef.current.style.transform = "translateX(0)";
      }

      setTimeout(() => setIsAnimating(false), 500);
    }, 20);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative overflow-hidden bg-white py-6 w-[98%]">
        <button
          onClick={manualPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={left_arrow} alt="Left" className="w-6 h-6" />
        </button>

        <div className="overflow-hidden w-full px-10">
          <div
            className="flex"
            ref={trackRef}
            style={{ width: `${logos?.length * ITEM_WIDTH}px` }}
          >
            {logos?.map((logo, idx) => (
              <div
                key={`${logo?.name}-${idx}`}
                className="flex items-center justify-center"
                style={{ width: ITEM_WIDTH, flexShrink: 0 }}
              >
                <img
                  src={logo?.src}
                  alt={logo?.name}
                  className="w-36 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={manualNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={right_arrow} alt="Right" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TrueInfiniteCarousel;
