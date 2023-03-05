import arrow from "../../assets/arrow.svg";
import { FC, ReactElement, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Datas = {
  date: string;
  task: number;
};

const datas: Array<Datas> = [
  { date: "S", task: 4 },
  { date: "M", task: 12 },
  { date: "T", task: 5 },
  { date: "W", task: 7 },
  { date: "TH", task: 3 },
  { date: "F", task: 6 },
  { date: "ST", task: 2 },
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
        <ResponsiveContainer>
          <LineChart margin={{ left: 0, top: 10, right: 10 }} data={datas}>
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                background: "none",
                border: "none",
                boxShadow: "none",
              }}
            />
            <XAxis padding={{ left: 20 }} strokeWidth={0} dataKey="date" />
            <YAxis strokeWidth={0} width={25} />
            <Line
              dot={false}
              activeDot={<CustomActiveDot />}
              strokeWidth={3}
              type="monotone"
              dataKey="task"
              stroke="#141522"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{ border: "none" }}
        className="px-4 py-2 bg-secondary-100 rounded-xl text-primary-100 border-none"
      >
        <p>{payload[0].value} Task</p>
      </div>
    );
  }

  return null;
};

interface CustomActiveDotProps {
  cx?: number;
  cy?: number;
}

const CustomActiveDot: FC<CustomActiveDotProps> = ({
  cx,
  cy,
}): ReactElement => {
  return (
    <>
      <circle cx={cx} cy={cy} r={8} fill="#546FFF" />
      <circle cx={cx} cy={cy} r={4} fill="#FFFFFF" />
    </>
  );
};

export default Chart;
