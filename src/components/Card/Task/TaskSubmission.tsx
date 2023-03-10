const TaskSubmission = () => {
  return (
    <section className="w-full p-6 rounded-xl bg-primary-100 text-secondary-100 space-y-10 md:w-4/12">
      <div className="space-y-6">
        <p className="text-sm font-semibold">Assigned Assignments</p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Creating Awesome Mobile Apps
          </h2>
          <p className="text-secondary-300 text-sm font-medium">UI UX Design</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Detail Student</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <p className="font-medium text-secondary-300">Student Name</p>
              <p className="font-semibold">Skylar Dias</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium text-secondary-300">Student Class</p>
              <p className="font-semibold">MIPA 2</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium text-secondary-300">Student Number</p>
              <p className="font-semibold">10</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">File Task</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <p className="text-secondary-300 font-medium">Last Modified</p>
              <p className="font-semibold">8 March 2023</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-secondary-300">File Submission</p>
              <div className="h-40 w-full border border-dashed border border-tertiary-100 flex items-center justify-center rounded-xl">
                <img
                  className="w-8 h-8 object-cover"
                  src="/file.svg"
                  alt="file"
                />
              </div>
              <p className="text-xs font-base text-secondary-300">
                *drag or browser from device
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 font-semibold text-sm">
        Submit
      </button>
    </section>
  );
};

export default TaskSubmission;
