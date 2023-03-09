const SearchFilter = () => {
  return (
    <div className="flex items-center gap-6 px-6 pb-6 text-secondary-100 md:p-0 sm:justify-between">
      <label
        htmlFor="search-input"
        className="group flex items-center gap-5 border border-primary-300 cursor-text w-full h-[52px] py-3.5 px-7 rounded-xl focus-within:ring-1 focus-within:ring-primary-300 sm:w-3/5 md:w-2/5"
      >
        <input
          id="search-input"
          className="outline-none bg-transparent w-full"
          placeholder="Search Mentors"
        />
        <img className="w-5 h-5 object-cover" src="/search.svg" alt="search" />
      </label>
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
