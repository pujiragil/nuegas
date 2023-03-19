import { createElement, FC, ReactElement } from "react";

interface HeadProps {
  type: "h1" | "h2" | "h3" | "h4";
  fontSize: [string, string] | string;
  fontWeight: "font-base" | "font-medium" | "font-semibold";
  value: string;
}

const Head: FC<HeadProps> = ({
  type,
  fontSize,
  fontWeight,
  value,
}): ReactElement => {
  let className: string = [
    "text-secondary-100 group-hover:text-primary-100",
    fontWeight,
    typeof fontSize === "string" ? fontSize : fontSize.join(" "),
  ].join(" ");

  return createElement(type, { className }, value);
};

export default Head;
