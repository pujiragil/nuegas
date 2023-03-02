import { ReactElement } from "react";
import ProfileLayout from "../components/Layouts/ProfileLayout";

const Dashboard = (): ReactElement => {
  return (
    <>
      <ProfileLayout
        titleProfile="Hi, Masbro"
        descProfile="Let's finish your task today!"
      />
      <h1>Dashboard Page</h1>
    </>
  );
};

export default Dashboard;
