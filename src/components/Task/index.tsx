const TaskDetail = () => {
  return (
    <div className="bg-primary-300 p-8 flex flex-col gap-8 basis-full md:basis-4/12">
      <div className="p-5 bg-primary-100 rounded-xl flex flex-col gap-10">
        <div className="text-center">
          <p className="font-semibold text-sm text-secondary-100">July 2022</p>
        </div>
      </div>
      <div className="bg-primary-100 flex flex-col gap-8 p-5 rounded-xl">
        <div className="flex flex-col gap-4 pb-8 border-b border-primary-300">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm text-secondary-100">
              Task Today
            </p>
            <img
              className="w-5 h-5 object-cover"
              src="/dot-three.svg"
              alt="dot-three"
            />
          </div>
          <div>
            <img
              className="h-36 w-full object-cover rounded-xl"
              src="/task.png"
              alt="task"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-secondary-100">
              Creating Awesome Mobile Apps
            </h3>
            <p className="text-xs font-medium text-secondary-200">
              UI/UX Designer
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-medium text-secondary-100">Progress</p>
              <p className="font-medium text-tertiary-100">75%</p>
            </div>
            <input
              className="w-full"
              type="range"
              min={0}
              max={100}
              value={75}
              disabled={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 object-cover"
                src="/time.svg"
                alt="time"
              />
              <p className="font-medium text-secondary-100">1 Hour</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="text-secondary-100 font-semibold">Detail Task</p>
              <p className="text-secondary-200 font-medium text-xs">
                UI/UX Designer
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary-300 text-sm font-semibold text-secondary-100">
                  1
                </span>
                <p className="text-sm font-medium text-secondary-100">
                  Understanding the tools in Figma
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary-300 text-sm font-semibold text-secondary-100">
                  2
                </span>
                <p className="text-sm font-medium text-secondary-100">
                  Understand the basics design
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary-300 text-sm font-semibold text-secondary-100">
                  3
                </span>
                <p className="text-sm font-medium text-secondary-100">
                  Design a mobile apps with figma
                </p>
              </div>
            </div>
          </div>
          <button className="rounded-xl bg-tertiary-100 text-primary-100 text-sm font-semibold py-3 w-full">
            Go To Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
