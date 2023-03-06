import { ReactElement } from "react";
import { Mentor } from "../components/Card";
import Chart from "../components/Chart";
import ProfileLayout from "../components/Layouts/ProfileLayout";
import ProgressBar from "../components/Progress";
import "../components/Progress/progressStyle.css";
import TaskDetail from "../components/Task";

const Dashboard = (): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-full md:basis-8/12">
        {/* Profile Layout */}
        <ProfileLayout
          titleProfile="Hi, Masbro"
          descProfile="Let's finish your task today!"
        />

        <div className="px-6 py-8 bg-primary-100 space-y-8 md:bg-primary-200 md:p-8">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* ProgressBar Component */}
            <ProgressBar />
            {/* Chart Component */}
            <Chart />
          </div>

          {/* Mentors */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-secondary-100">
                Monthly Mentors
              </h2>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8">
              <Mentor
                avatar="/profile.png"
                name="Jokowi banteng"
                jobTitle="Presiden Wakanda"
                tasks={40}
                stars={4.0}
                reviews={750}
              />
              <Mentor
                avatar="/profile.png"
                name="Jokowi banteng"
                jobTitle="Presiden Wakanda"
                tasks={40}
                stars={4.0}
                reviews={750}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Task Detail */}
      <TaskDetail />
    </div>
  );
};

export default Dashboard;
