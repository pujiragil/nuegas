import arrow from "../../assets/arrow.svg";
import ActivityChart from "./AcitivityChart";
import { useState } from "react";

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
  const [isShow, setIsShow] = useState<boolean>(false);
  const [selectList, setSelectedList] = useState<string>("");
  const lists: string[] = ["This Week", "Last Week"];

  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl bg-primary-300 md:w-fit">
      <div className="flex items-center justify-between">
        <p>Activity</p>
        <div className="text-xs relative">
          <div
            onClick={() => setIsShow((prevShow) => !prevShow)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {selectList ? (
              <>
                <p>{selectList}</p>
                <img src={arrow} alt={selectList} />
              </>
            ) : (
              <>
                <p>Select Week</p>
                <img src={arrow} alt="arrow" />
              </>
            )}
          </div>
          {isShow && (
            <ul className="z-10 mt-2 left-0 absolute bg-primary-100 w-max border border-secondary-100 rounded-xl flex flex-col overflow-hidden">
              {lists.map((list) => (
                <li
                  onClick={() => {
                    setSelectedList(list);
                    setIsShow(false);
                  }}
                  className="cursor-pointer p-2.5 hover:bg-tertiary-100 hover:text-primary-100 transition-all duration-200"
                >
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full h-40 md:w-[422px] bg-primary-100 rounded-xl p-5">
        <ActivityChart datas={datas} />
      </div>
    </div>
  );
};

export default Chart;
