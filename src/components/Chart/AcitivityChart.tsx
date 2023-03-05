import { FC, ReactElement } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Datas = { day: string; task: number };

interface ActivityChartProps {
  datas: Datas[];
}

const ActivityChart = ({ datas }: ActivityChartProps) => {
  return (
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
        <XAxis padding={{ left: 20 }} strokeWidth={0} dataKey="day" />
        <YAxis padding={{ bottom: 10 }} strokeWidth={0} width={25} />
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
export default ActivityChart;
