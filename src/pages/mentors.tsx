import SearchFilter from "../components/Field/SearchFilter";
import ProfileLayout from "../components/Layouts/ProfileLayout";

const Mentors = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Explore Mentors"
        children={<SearchFilter />}
      />
    </>
  );
};

export default Mentors;
