import { FC } from "react";
import { Head } from "../../Atoms";

interface MentorProps {
  avatar: string;
  name: string;
  jobTitle: string;
  tasks: number;
  stars: number;
  reviews: number;
  description?: string;
}

const Mentor: FC<MentorProps> = ({
  avatar,
  name,
  jobTitle,
  tasks,
  stars,
  reviews,
  description,
}) => {
  return (
    <section className="p-5 md:p-6 flex flex-col gap-6 md:gap-5 bg-primary-100 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={avatar}
            alt="profile"
          />
          <div className="space-y-1">
            <Head type="h3" fontSize="text-base" fontWeight="font-semibold" value={name} />
            <p className="text-xs font-normal text-secondary-200">{jobTitle}</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-tertiary-100">+ Follow</p>
      </div>
      {description && (
        <p className="text-sm font-medium text-secondary-300">
          {description.slice(0, 85)}...
        </p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6 object-cover" src="/task.svg" alt="task" />
          <p className="font-medium text-sm text-secondary-100">{tasks} Task</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-6 h-6 object-cover" src="/star.svg" alt="star" />
          <p className="text-sm text-secondary-100 font-medium">
            {stars} ({reviews} Reviews)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
