import { Fragment } from "react";
import { mentorSliders, mentorLists } from "../utils/mentor";
import SearchFilter from "../components/Field/SearchFilter";
import ProfileLayout from "../components/Layouts/ProfileLayout";
import MentorSlider from "../components/Slider/Mentor";

const Mentors = () => {
  return (
    <div className="w-full">
      <ProfileLayout
        titleProfile="Explore Mentors"
        background="primary"
        children={<SearchFilter placeholder="Search Mentors" />}
      />

      <div className="bg-primary-200 flex flex-col gap-8 px-6 py-8 md:p-8">
        <div className="space-y-[18px]">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-secondary-100 text-xl md:text-2xl">
              Recent Mentors
            </h2>
          </div>
          <div>
            <MentorSlider smSlide={1} lgSlide={3} sliders={mentorSliders} />
          </div>
        </div>
        <div className="space-y-[18px]">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-secondary-100 text-xl md:text-2xl">
              Mentors
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {mentorLists.map((slide, index) => (
              <Fragment key={index}>{slide}</Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
