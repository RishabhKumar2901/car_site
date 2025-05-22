import { useEffect, useRef, useState } from "react";
import left_arrow from "../../assets/left_arrow.svg";
import right_arrow from "../../assets/right_arrow.svg";
import { solutionsAndServicesData } from "../../static/HomeData/solutionsAndServicesData";

const ITEM_WIDTH = 167.14;

const SolutionsAndServices: React.FC = () => {
  const [logos, setLogos] = useState(solutionsAndServicesData);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasUserInteracted = useRef(false);

  const clearAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };
  
  const startAutoScroll = () => {
    clearAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (!hasUserInteracted.current) shiftLeft();
    }, 2000);
  };
  
  const pauseAutoScrollFor10Seconds = () => {
    hasUserInteracted.current = true;
    clearAutoScroll();
  
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  
    pauseTimeoutRef.current = setTimeout(() => {
      hasUserInteracted.current = false;
      startAutoScroll();
    }, 10000);
  };  

  const shiftLeft = () => {
    if (isAnimating || !trackRef.current) return;
    setIsAnimating(true);
    setLogos((prev) => [...prev, prev[0]]);

    requestAnimationFrame(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
        trackRef.current.style.transform = `translateX(-${ITEM_WIDTH}px)`;
      }

      setTimeout(() => {
        setLogos((prev) => {
          const rest = prev.slice(1, prev.length);
          return [...rest];
        });

        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = "translateX(0)";
        }

        setTimeout(() => setIsAnimating(false), 20);
      }, 500);
    });
  };

  const manualNext = () => {
    if (!isAnimating) {
      pauseAutoScrollFor10Seconds();
      shiftLeft();
    }
  };
  
  const manualPrev = () => {
    if (isAnimating) return;
  
    pauseAutoScrollFor10Seconds();
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
  
  useEffect(() => {
    startAutoScroll();
    return () => {
      clearAutoScroll();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);  

  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 mt-10">
      <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center">
        //&nbsp;&nbsp;&nbsp;&nbsp;Solutions & Services&nbsp;&nbsp;&nbsp;&nbsp;//
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 font-montserrat text-center">
        Explore How VC Can Support Your Business
      </div>

      <div className="relative overflow-hidden py-6 w-[70%] mt-6">
        <button
          onClick={manualPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={left_arrow} alt="Left" className="w-4 h-4" />
        </button>

        <div className="overflow-hidden w-full py-2">
          <div
            className="flex"
            ref={trackRef}
            style={{ width: `${logos?.length * ITEM_WIDTH}px` }}
          >
            {logos?.map((item, index) => (
              <a
                key={index}
                className="flex flex-col items-center justify-center"
                style={{ width: ITEM_WIDTH, flexShrink: 0 }}
                href={item?.directedUrl}
              >
                <img
                  src={item?.imageUrl}
                  alt={item?.serviceName}
                  className={`w-${ITEM_WIDTH} h-[11.946rem] object-cover`}
                />
                <div className="text-base font-bold font-montserrat">
                  {item?.serviceName}
                </div>
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={manualNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#dbdbdb] shadow rounded-full"
        >
          <img src={right_arrow} alt="Right" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SolutionsAndServices;
