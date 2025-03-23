type ChartProps = {
  lessonData: Array<{ name: string; value: number }>;
};

import { Tooltip, PieChart, Pie, Cell } from "recharts";
import CountUp from "react-countup";

export default function LessonsChart({ lessonData }: ChartProps) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#689e53"];
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-[500px]">
      <h2 className="text-xl font-semibold mb-4">Активни/Завършени Уроци</h2>
      <div className="flex gap-6 px-10 justify-between">
        <div className="bg-green-100 p-4 rounded-lg text-center w-40 shadow">
          <h3 className="text-3xl font-bold">
            <CountUp start={0} end={760} duration={1.3} separator="," />
          </h3>
          <p>Активни</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center w-40 shadow">
          <h3 className="text-3xl font-bold">
            <CountUp start={0} end={8030} duration={1.3} separator="," />
          </h3>
          <p>Завършени</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-10">
        <PieChart width={280} height={280}>
          <Pie
            data={lessonData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label
            labelLine
          >
            {lessonData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
