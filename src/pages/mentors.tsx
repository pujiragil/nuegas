import SearchFilter from "../components/Field/SearchFilter";
import ProfileLayout from "../components/Layouts/ProfileLayout";

const Mentors = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Explore Mentors"
        background="primary"
        children={<SearchFilter placeholder="Search Mentors" />}
      />
    </>
  );
};

export default Mentors;
