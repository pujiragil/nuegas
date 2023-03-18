import { FC } from "react";
import { Language } from "../../store/settingStore";

const listStyle: string =
  "px-5 py-4 cursor-pointer hover:bg-primary-300 transition-all duration-300 ease-in-out";

interface SelectDropdownProps {
  lists: Language[];
  onSelect: (language: "English" | "Indonesian" | "Javanese") => void;
}

const SelectDropdown: FC<SelectDropdownProps> = ({ lists, onSelect }) => {
  return (
    <div className="absolute top-full left-0 w-full mt-4 bg-primary-100 z-10 border border-primary-300 grid grid-cols-1 divide-y divide-primary-300 rounded-xl overflow-hidden font-medium text-xs text-secondary-100">
      {lists.map((list) => (
        <p key={list} onClick={() => onSelect(list)} className={listStyle}>
          {list}
        </p>
      ))}
    </div>
  );
};

export default SelectDropdown;
