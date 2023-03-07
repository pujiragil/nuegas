const Task = () => {
  return (
    <section className="bg-primary-100 rounded-xl p-6 space-y-4">
      <div className="w-full rounded-xl">
        <img className="w-full h-28 object-cover" src="/task.png" alt="task" />
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-secondary-100">
          Create Mobile App Design
        </h4>
        <p className="text-xs font-medium text-secondary-200">UI UX Design</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between font-medium">
          <p className="text-secondary-100">Progress</p>
          <p className="text-tertiary-100">75%</p>
        </div>
        <input
          className="w-full"
          type="range"
          min={0}
          max={100}
          value={75}
          disabled
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="h-6 w-6 object-cover" src="/time.svg" alt="time" />
          <p className="font-medium text-secondary-100">3 Days left</p>
        </div>
      </div>
    </section>
  );
};

export default Task;
