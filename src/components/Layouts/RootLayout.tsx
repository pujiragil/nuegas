import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import PageLayout from "./PageLayout";

const BaseLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-primary-100">
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <PageLayout>
          <Outlet />
        </PageLayout>
      </div>
    </div>
  );
};

export default BaseLayout;
