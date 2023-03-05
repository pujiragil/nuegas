import arrow from "../../assets/arrow.svg";
import ActivityChart from "./AcitivityChart";
import React, { useState } from "react";

type Datas = {
  day: string;
  task: number;
};

const datas: Array<Datas> = [
  { day: "S", task: 4 },
  { day: "M", task: 12 },
  { day: "T", task: 5 },
  { day: "W", task: 7 },
  { day: "TH", task: 3 },
  { day: "F", task: 6 },
  { day: "ST", task: 2 },
];

const Chart = () => {
  const [selectList, setSelectedList] = useState<string>("");

  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl bg-primary-300 md:w-fit">
      <SelectTask select={selectList} onSelect={setSelectedList} />
      <div className="w-full h-40 md:w-[422px] bg-primary-100 rounded-xl p-5">
        <ActivityChart datas={datas} />
      </div>
    </div>
  );
};

interface SelectTaskProps {
  select: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
}

const SelectTask = ({ select, onSelect }: SelectTaskProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const lists: string[] = ["This Week", "Last Week"];

  const selectedList = (
    <>
      <p>{select ? select : "Select Week"}</p>
      <img src={arrow} alt={select} />
    </>
  );

  return (
    <div className="flex items-center justify-between">
      <p>Activity</p>
      <div className="text-xs relative">
        <div
          onClick={() => setIsShow((prevShow: boolean) => !prevShow)}
          className="flex items-center gap-2 cursor-pointer"
        >
          {selectedList}
        </div>
        {isShow && (
          <ul className="z-10 mt-2 left-0 absolute bg-primary-100 w-max border border-secondary-100 rounded-xl flex flex-col overflow-hidden">
            {lists.map((list: string) => (
              <li
                key={list}
                className="cursor-pointer p-2.5 hover:bg-tertiary-100 hover:text-primary-100 transition-all duration-200"
                onClick={() => {
                  onSelect(list);
                  setIsShow(false);
                }}
              >
                {list}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Chart;
