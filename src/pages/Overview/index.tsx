import { ReactElement } from "react";
import { TaskDetail } from "../../components/Card";
import Chart from "../../components/Chart";
import ProfileLayout from "../../components/Layouts/ProfileLayout";
import ProgressBar from "../../components/Progress";
import "../../components/Progress/progressStyle.css";
import MentorSlider from "../../components/Slider/Mentor";
import TaskSlider from "../../components/Slider/Task";
import { mentorSliders } from "../../utils/mentor";
import { taskSliders } from "../../utils/task";

import useSWR from "swr";
import useAuth from "../../store/authStore";

const Dashboard = (): ReactElement => {
  const accessToken = useAuth((state) => state.accessToken);
  const { data, error, isLoading } = useSWR("/users/info", async () => {
    try {
      const response = await fetch("http://localhost:5000/users/info", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  });

  if (isLoading) return <p>Loading bang</p>;

  if (error) return <p>Error bang</p>;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-7/12 lg:w-8/12">
        {/* Profile Layout */}
        <ProfileLayout
          titleProfile="Hi, Masbro"
          descProfile="Let's finish your task today!"
        />

        <div className="px-6 py-8 bg-primary-100 space-y-8 overflow-hidden md:bg-primary-200 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* ProgressBar Component */}
            <ProgressBar />
            {/* Chart Component */}
            <Chart />
          </div>

          {/* Mentors */}
          <MentorSlider
            heading="Monthly Mentors"
            smSlide={1}
            lgSlide={2}
            sliders={mentorSliders}
          />

          {/* Tasks */}
          <TaskSlider
            heading="Upcoming Task"
            smSlide={1}
            lgSlide={2}
            sliders={taskSliders}
          />
        </div>
      </div>

      {/* Task Detail */}
      <TaskDetail />
    </div>
  );
};

export default Dashboard;
