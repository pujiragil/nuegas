import CircularProgressbar from "./CircularProgress";

const ProgressBar = () => {
  return (
    <div className="bg-secondary-100 text-primary-100 rounded-lg w-full max-w-[428px] p-5 mx-auto md:mx-0 md:w-fit">
      <div className="flex items-center justify-between md:flex-col md:gap-4">
        <div className="flex flex-col gap-5">
          <p className="font-semibold">Running Task</p>
          <p className="text-[32px] font-semibold">65</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[68px] h-[68px] overflow-hidden">
            <CircularProgressbar
              value={45}
              text="45%"
              strokeWidth={3}
              styles={{
                trail: { stroke: "#1A1E38" },
                path: { stroke: "#546FFF" },
                text: { fill: "#FFF", fontSize: 24, fontWeight: 500 },
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl font-semibold">100</p>
            <p className="text-sm font-medium text-secondary-300">Task</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
