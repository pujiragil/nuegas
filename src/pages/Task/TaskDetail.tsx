import SearchFilter from "../../components/Field/SearchFilter";
import ProfileLayout from "../../components/Layouts/ProfileLayout";

const TaskDetail = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Detail Task"
        background="primary"
        children={<SearchFilter placeholder="Search Task" />}
      />

      <main className="bg-primary-200 flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-8">
        <section className="bg-primary-100 rounded-xl space-y-8">
          <div className="space-y-4 md:space-y-6">
            <div className="overflow-hidden rounded-xl cursor-pointer">
              <img
                className="w-full h-52 object-cover hover:scale-105 transition-all duration-200 ease-in"
                src="/task.png"
                alt="task"
              />
            </div>
            <div className="space-y-4 px-4 pb-4">
              <h1 className="font-semibold text-2xl text-secondary-100">
                Creating Awesome Mobile Apps
              </h1>
              <div className="flex items-center text-xs font-medium">
                <p className="pr-2.5 text-secondary-300 border-r border-[#DFDFDF]">
                  UI UX Design
                </p>
                <p className="pl-2.5 text-tertiary-100">+ Get Mentors</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <img
                    className="w-4 h-4 object-cover"
                    src="/member.svg"
                    alt="member"
                  />
                  <p className="text-xs font-medium text-secondary-100">
                    200 Student Involved
                  </p>
                </div>{" "}
                <div className="flex items-center gap-1.5">
                  <img
                    className="w-4 h-4 object-cover"
                    src="/time.svg"
                    alt="time"
                  />
                  <p className="text-xs font-medium text-secondary-100">
                    1 Hour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TaskDetail;
