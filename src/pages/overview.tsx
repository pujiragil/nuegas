import { ReactElement } from "react";
import ProfileLayout from "../components/Layouts/ProfileLayout";
import ProgressBar from "../components/Progress";
import "../components/Progress/progressStyle.css";

const Dashboard = (): ReactElement => {
  return (
    <>
      {/* Profile Layout */}
      <ProfileLayout
        titleProfile="Hi, Masbro"
        descProfile="Let's finish your task today!"
      />

      <div className="px-6 py-8 bg-primary-100 md:bg-primary-200 md:p-8">
        {/* ProgressBar Component */}
        <ProgressBar />
      </div>
    </>
  );
};

export default Dashboard;
