import { ReactElement } from "react";
import ProfileLayout from "../components/Layouts/ProfileLayout";
import CircularProgressbar from "../components/Progress/CircularProgress";
import "../components/Progress/progressStyle.css";

const Dashboard = (): ReactElement => {
  return (
    <>
      <ProfileLayout
        titleProfile="Hi, Masbro"
        descProfile="Let's finish your task today!"
      />

      <div className="px-6 py-8 bg-primary-100 md:bg-primary-200 md:p-8">
        <div className="bg-secondary-100 text-primary-100 rounded-lg w-fit p-5">
          <div className="flex items-center gap-10 md:flex-col md:gap-4">
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
      </div>
    </>
  );
};

export default Dashboard;
