import Navbar from "../Navbar";

const BaseLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-8 md:px-8 bg-primary-100">
      <div className="grid lg:grid-cols-3">
        <Navbar />
      </div>
    </div>
  );
};

export default BaseLayout;
