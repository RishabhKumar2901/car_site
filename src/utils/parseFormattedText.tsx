export const parseFormattedText = (text: string) => {
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