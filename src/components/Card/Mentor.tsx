import { FC } from "react";

interface MentorProps {
  avatar: string;
  name: string;
  jobTitle: string;
  tasks: number;
  stars: number;
  reviews: number;
}

const Mentor: FC<MentorProps> = ({
  avatar,
  name,
  jobTitle,
  tasks,
  stars,
  reviews,
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
            <h3 className="font-semibold text-secondary-100">{name}</h3>
            <p className="text-xs font-normal text-secondary-200">{jobTitle}</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-tertiary-100">+ Follow</p>
      </div>
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
