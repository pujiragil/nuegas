import { FC } from "react";

interface StudentProps {
  studentInvolve: number;
}

const Student: FC<StudentProps> = ({ studentInvolve }) => {
  return (
    <div className="flex items-center gap-1.5">
      <img className="w-4 h-4 object-cover" src="/member.svg" alt="member" />
      <p className="text-xs font-medium text-secondary-100">
        {studentInvolve} Student Involved
      </p>
    </div>
  );
};

export default Student;
