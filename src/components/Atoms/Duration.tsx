import { FC } from "react";

interface DurationProps {
  durationTime: number;
}

const Duration: FC<DurationProps> = ({ durationTime }) => {
  return (
    <div className="flex items-center gap-1.5">
      <img className="w-4 h-4 object-cover" src="/time.svg" alt="time" />
      <p className="text-xs font-medium text-secondary-100">
        {durationTime} Hour
      </p>
    </div>
  );
};

export default Duration;
