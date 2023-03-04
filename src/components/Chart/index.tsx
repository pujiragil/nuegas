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
  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl bg-primary-300 md:w-fit">
      <div className="flex items-center justify-between">
        <p>Activity</p>
      </div>
      <div className="w-full h-40 md:w-[422px] bg-primary-100 rounded-xl p-5">
        <ResponsiveContainer>
          <LineChart margin={{ left: 0, right: 0, top: 10 }} data={datas}>
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
              activeDot={{ r: 6 }}
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

export default Chart;
