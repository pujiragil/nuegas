import { FC } from "react";
import Head from "./Head";

interface AssessmentProps {
  assessments: string[];
}

const Assessment: FC<AssessmentProps> = ({ assessments }) => {
  return (
    <div className="space-y-4 px-4 text-secondary-100">
      <Head
        type="h2"
        fontWeight="font-semibold"
        fontSize={["text-xl", "md:text-2xl"]}
        value="Essence of Assessment"
      />
      <div className="space-y-5">
        {assessments.map((assessment, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <img
              className="w-4 h-4 object-cover"
              src="/checklist.svg"
              alt="checklist"
            />
            <p className="text-xs font-base">{assessment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
