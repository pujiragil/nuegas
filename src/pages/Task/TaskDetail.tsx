import SearchFilter from "../../components/Field/SearchFilter";
import ProfileLayout from "../../components/Layouts/ProfileLayout";
import {
  Assessment,
  Description,
  Duration,
  Student,
  Thumbnail,
} from "../../components/Atoms";
import { TaskSubmission } from "../../components/Card";

const assessmentList: string[] = [
  "Understanding the tools in Figma",
  "Understand the basics of making designs",
  "Designing a mobile application using figma",
  "Presenting the design flow",
];

const TaskDetail = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Detail Task"
        background="primary"
        children={<SearchFilter placeholder="Search Task" />}
      />

      <main className="bg-primary-200 flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-8">
        <section className="bg-primary-100 rounded-xl space-y-8 pb-4 md:w-8/12">
          <div className="space-y-4 md:space-y-6">
            {/* Thumbnail Section */}
            <Thumbnail src="/task.png" />

            <div className="space-y-4 px-4">
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
                <Student studentInvolve={200} />
                <Duration durationTime={1} />
              </div>
            </div>

            {/* Description Section*/}
            <Description description="Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration." />

            {/* Assessment Section */}
            <Assessment assessments={assessmentList} />
          </div>
        </section>

        <TaskSubmission />
      </main>
    </>
  );
};

export default TaskDetail;
