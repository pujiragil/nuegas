const SearchFilter = () => {
  return (
    <div className="flex items-center gap-6 px-6 pb-6 md:p-0">
      <input
        className="outline-none bg-transparent py-3.5 px-7 rounded-xl border border-primary-300 w-full h-[52px] focus:ring-1 focus:ring-primary-300"
        placeholder="Search Mentors"
      />
      <div className="min-w-[52px] h-[52px] w-[52px] rounded-xl border border-primary-300 flex items-center justify-center hover:bg-primary-300 cursor-pointer">
        <img className="w-6 h-6 object-cover" src="/filter.svg" alt="filter" />
      </div>
    </div>
  );
};

export default SearchFilter;
