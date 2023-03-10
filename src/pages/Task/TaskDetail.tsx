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

      <div className="bg-primary-200 flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-8"></div>
    </>
  );
};

export default TaskDetail;
