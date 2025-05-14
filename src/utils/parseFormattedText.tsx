// ^^ => red bold text
// ** => black bold text
// $$ => red normal text
// ~~ => red bold sub-heading
// @@ => black bold sub-heading
// ## => red bold title
// %% => black bold title
// !! => red bold heading
// && => black bold heading

export const parseFormattedText = (
  text: string,
  mb?: string,
  color?: string
) => {
  return text.split("\n").map((line: string, index: number) => {
    if (line.trim() === "") {
      return <div key={index} className={mb ? mb : "mb-8"} />;
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
            }] text-base lg:text-lg font-bold`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("**")) {
        parts.push(
          <span
            key={match.index}
            className="text-sm lg:text-base font-bold text-[#606061]"
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("~~")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-2xl font-bold text-[${
              color ? color : "#ee363c"
            }]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("@@")) {
        parts.push(
          <span
            key={match.index}
            className="text-xl lg:text-2xl font-bold text-[#202429]"
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("$$")) {
        parts.push(
          <span
            key={match.index}
            className={`text-sm lg:text-base text-[${
              color ? color : "#ee363c"
            }]`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("##")) {
        parts.push(
          <span
            key={match.index}
            className={`text-2xl lg:text-4xl text-[${
              color ? color : "#ee363c"
            }] font-semibold`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("%%")) {
        parts.push(
          <span
            key={match.index}
            className="text-2xl lg:text-4xl text-[#202429] font-semibold"
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("!!")) {
        parts.push(
          <span
            key={match.index}
            className={`text-xl lg:text-[1.75rem] text-[${
              color ? color : "#ee363c"
            }] font-semibold`}
          >
            {matchText.slice(2, -2)}
          </span>
        );
      } else if (matchText.startsWith("&&")) {
        parts.push(
          <span
            key={match.index}
            className="text-xl lg:text-[1.75rem] text-[#202429] font-semibold"
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
        className={`mb-2 ${
          hasHeading && "mb-0"
        } leading-[1.8rem] tracking-wide text-[#555] font-light text-sm lg:text-base lg:leading-[1.8rem] lg:tracking-wide`}
      >
        {parts}
      </div>
    );
  });
};
