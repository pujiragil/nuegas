import SearchFilter from "../../components/Field/SearchFilter";
import ProfileLayout from "../../components/Layouts/ProfileLayout";
import TaskSlider from "../../components/Slider/Task";
import { taskSliders } from "../../utils/task";

const Task = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Explore Task"
        background="primary"
        children={<SearchFilter placeholder="Search Task" />}
      />
      <div className="bg-primary-200 flex flex-col gap-8 px-6 py-8 md:p-8">
        <TaskSlider
          heading="Time Limit"
          smSlide={1}
          lgSlide={3}
          sliders={taskSliders}
        />
        <TaskSlider
          heading="New Task"
          smSlide={1}
          lgSlide={3}
          sliders={taskSliders}
        />
      </div>
    </>
  );
};

export default Task;
