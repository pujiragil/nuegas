import { ReactElement } from "react";
import ProfileLayout from "../components/Layouts/ProfileLayout";

const Dashboard = (): ReactElement => {
  return (
    <>
      <ProfileLayout
        titleProfile="Hi, Masbro"
        descProfile="Let's finish your task today!"
      />

      <div className="px-6 py-8 bg-primary-100">
        <div className="bg-secondary-100 text-primary-100 rounded-lg w-full p-5">
          <div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Running Task</p>
              <p className="text-[32px] font-semibold">65</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
