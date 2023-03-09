import { FC, ReactElement } from "react";

const wrapper: string =
  "flex items-center gap-3 h-[52px] py-3.5 px-7 border border-primary-300 rounded-xl cursor-pointer";
const iconWrapperStyle: string = `${wrapper} hover:bg-primary-300`;
const iconStyle: string = "h-6 w-6 object-cover";

interface SearchFilterProps {
  placeholder: string;
}

const SearchFilter: FC<SearchFilterProps> = ({ placeholder }): ReactElement => {
  return (
    <div className="flex items-center gap-6 px-6 pb-6 text-secondary-100 md:p-0 sm:justify-between">
      <InputField placeholder={placeholder} />
      <div className="min-w-[52px] h-[52px] w-[52px] rounded-xl border border-primary-300 flex items-center justify-center hover:bg-primary-300 cursor-pointer md:hidden">
        <img className={iconStyle} src="/filter.svg" alt="filter" />
      </div>
      <div className="hidden md:flex items-center gap-6">
        <div className={iconWrapperStyle}>
          <img className={iconStyle} src="/category.svg" alt="category" />
          <p className="text-secondary-100 font-semibold text-xs">Category</p>
        </div>
        <div className={iconWrapperStyle}>
          <img className={iconStyle} src="/sort.svg" alt="sort" />
          <p className="text-secondary-100 font-semibold text-xs">
            Sort By: Popular
          </p>
        </div>
      </div>
    </div>
  );
};

const InputField: FC<SearchFilterProps> = ({ placeholder }): ReactElement => {
  return (
    <label
      htmlFor="search-input"
      className={`${wrapper} focus-within:ring-1 focus-within:ring-primary-300 w-full sm:w-3/5 md:w-2/5`}
    >
      <input
        id="search-input"
        className="outline-none bg-transparent w-full text-xs font-base"
        placeholder={placeholder}
      />
      <img className={iconStyle} src="/search.svg" alt="search" />
    </label>
  );
};

export default SearchFilter;
