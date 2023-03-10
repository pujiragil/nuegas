import { FC } from "react";

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="px-4 space-y-2 text-secondary-100">
      <h2 className="text-xl font-semibold">Description</h2>
      <p className="font-base text-xs">{description}</p>
    </div>
  );
};

export default Description;
