import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpperFooter from "../components/UpperFooter";
import app_banner from "../assets/app_banner.png";
import { termsnConditionData } from "../static/termsConditionData";

const TermsConditions = () => {
  const parseFormattedText = (text: string) => {
    return text.split("\n").map((line: string, index: number) => {
      if (line.trim() === "") {
        return <div key={index} className="mb-8" />;
      }

      const parts = [];
      const regex = /(\*\*.*?\*\*|\^\^.*?\^\^)/g;
      let lastIndex = 0;
      let match;
      let hasHeading = false;

      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(
            <span key={lastIndex}>{line.slice(lastIndex, match.index)}</span>
          );
        }

        const matchText = match[0];

        if (matchText.startsWith("^^")) {
          hasHeading = true;
          parts.push(
            <span
              key={match.index}
              className="text-[#ee363c] text-lg font-bold"
            >
              {matchText.slice(2, -2)}
            </span>
          );
        } else if (matchText.startsWith("**")) {
          parts.push(
            <span
              key={match.index}
              className="text-base font-bold text-[#606061]"
            >
              {matchText.slice(2, -2)}
            </span>
          );
        }

        lastIndex = match.index + matchText.length;
      }

      if (lastIndex < line.length) {
        parts.push(<span key={lastIndex}>{line.slice(lastIndex)}</span>);
      }

      return (
        <div key={index} className={`mb-2 ${hasHeading ? "mt-8" : ""}`}>
          {parts}
        </div>
      );
    });
  };

  return (
    <div className="bg-[#fefffe] font-montserrat">
      <Navbar />
      <div className="text-4xl font-semibold pt-32 text-center">
        Terms & Condition
      </div>
      <div className="w-full flex justify-center">
        <div className="text-base font-light text-[#565757] w-[90%] xl:w-[69%] leading-[1.7rem] tracking-wide">
          {parseFormattedText(termsnConditionData)}
        </div>
      </div>
      <a
        href="https://apps.apple.com/in/app/vehiclecare/id1634342039?mt=8"
        className="w-full flex justify-center px-4"
      >
        <img src={app_banner} alt="App Banner" className="w-full" />
      </a>
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default TermsConditions;
