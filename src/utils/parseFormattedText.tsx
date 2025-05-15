// ^^ => red bold text
// ** => black bold text
// $$ => red normal text
// ~~ => red bold sub-heading
// @@ => black bold sub-heading
// ## => red bold title
// %% => black bold title
// !! => red bold heading
// && => black bold heading

type FormattedText = {
  text: string;
  margin?: string;
  color?: string;
  boldType?: string;
  leadingSize?: string;
  trackingType?: string;
};

export const parseFormattedText = ({
  text,
  margin,
  color,
  boldType,
  leadingSize,
  trackingType,
}: FormattedText) => {
  return text.split("\n").map((line: string, index: number) => {
    if (line.trim() === "") {
      return <div key={index} className={margin ? margin : "mb-8"} />;
    }

    const parts = [];
    const regex =
      /(##.*?##|%%.*?%%|~~.*?~~|@@.*?@@|\^\^.*?\^\^|\*\*.*?\*\*|\$\$.*?\$\$|!!.*?!!|&&.*?&&)/g;
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
            className={`text-[${
              color ? color : "#ee363c"
            }] text-base font-montserrat lg:text-lg ${
              boldType ? boldType : "font-bold"
            }`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("**")) {
        parts.push(
          <span
            key={match.index}
            className={`text-sm lg:text-base font-montserrat ${
              boldType ? boldType : "font-bold"
            } text-[#606061]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("~~")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-2xl font-montserrat ${
              boldType ? boldType : "font-bold"
            } text-[${color ? color : "#ee363c"}]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("@@")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-2xl font-montserrat ${
              boldType ? boldType : "font-bold"
            } text-[#202429]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("$$")) {
        parts.push(
          <span
            key={match.index}
            className={`text-sm lg:text-base font-montserrat ${
              boldType && boldType
            } text-[${color ? color : "#ee363c"}]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("##")) {
        parts.push(
          <span
            key={match.index}
            className={`text-2xl lg:text-4xl font-montserrat text-[${
              color ? color : "#ee363c"
            }] ${boldType ? boldType : "font-semibold"}`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("%%")) {
        parts.push(
          <span
            key={match.index}
            className={`text-2xl lg:text-4xl font-montserrat text-[#202429] ${
              boldType ? boldType : "font-semibold"
            }`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("!!")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-[1.75rem] font-montserrat text-[${
              color ? color : "#ee363c"
            }] ${boldType ? boldType : "font-semibold"}`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("&&")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-[1.75rem] text-[#202429] font-montserrat ${
              boldType ? boldType : "font-semibold"
            }`}
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
      <div
        key={index}
        className={`${margin ? margin : "mb-2"} ${hasHeading && "mb-0"} ${
          leadingSize ? leadingSize : "leading-[1.8rem]"
        } ${
          trackingType ? trackingType : "tracking-wide"
        } text-[#555] font-light font-montserrat text-sm lg:text-base ${
          leadingSize ? `lg:${leadingSize}` : "lg:leading-[1.8rem]"
        } ${trackingType ? `lg:${trackingType}` : "lg:tracking-wide"}`}
      >
        {parts}
      </div>
    );
  });
};
