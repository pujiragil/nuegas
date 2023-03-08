const SearchFilter = () => {
  return (
    <div className="flex items-center gap-6 px-6 pb-6 md:p-0 md:justify-between">
      <input
        className="outline-none bg-transparent py-3.5 px-7 rounded-xl border border-primary-300 w-full h-[52px] focus:ring-1 focus:ring-primary-300 md:w-1/3"
        placeholder="Search Mentors"
      />
      <div className="min-w-[52px] h-[52px] w-[52px] rounded-xl border border-primary-300 flex items-center justify-center hover:bg-primary-300 cursor-pointer md:hidden">
        <img className="w-6 h-6 object-cover" src="/filter.svg" alt="filter" />
      </div>
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-3 h-[52px] py-3.5 px-7 border border-primary-300 rounded-xl cursor-pointer hover:bg-primary-300">
          <img
            className="h-6 w-6 object-cover"
            src="/category.svg"
            alt="category"
          />
          <p className="text-secondary-100 font-semibold text-xs">Category</p>
        </div>
        <div className="flex items-center gap-3 h-[52px] py-3.5 px-7 border border-primary-300 rounded-xl cursor-pointer hover:bg-primary-300">
          <img className="h-6 w-6 object-cover" src="/sort.svg" alt="sort" />
          <p className="text-secondary-100 font-semibold text-xs">
            Sort By: Popular
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
