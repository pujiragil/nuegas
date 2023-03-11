import { createElement, FC, ReactElement } from "react";

interface HeadProps {
  type: "h1" | "h2" | "h3" | "h4",
  fontSize: [string, string] | string,
  fontWeight: "font-base" | "font-medium" | "font-semibold",
  value: string
}

const Head: FC<HeadProps> = ({ type, fontSize, fontWeight, value }): ReactElement => {
  let className: string;

  if (fontSize.length && typeof fontSize === "object") {
    const [smSize, mdSize]: string[] = fontSize;
    className = `text-secondary-100 ${fontWeight} ${smSize} md:${mdSize}`;
  } else {
    className = `text-secondary-100 ${fontWeight} ${fontSize}`
  }

  return createElement(type, { className }, value);
}

export default Head;
