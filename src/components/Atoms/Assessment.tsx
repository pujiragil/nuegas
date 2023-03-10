import { FC } from "react";

interface AssessmentProps {
  assessments: string[];
}

const Assessment: FC<AssessmentProps> = ({ assessments }) => {
  return (
    <div className="space-y-4 px-4 text-secondary-100">
      <h2 className="font-semibold text-xl">Essence Of Assessment</h2>
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
