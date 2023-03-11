import { FC } from "react";
import Head from "./Head";

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="px-4 space-y-2 text-secondary-100">
      <Head
        type="h2"
        fontWeight="font-semibold"
        fontSize={["text-xl", "md:text-2xl"]}
        value="Description"
      />
      <p className="font-base text-xs">{description}</p>
    </div>
  );
};

export default Description;
