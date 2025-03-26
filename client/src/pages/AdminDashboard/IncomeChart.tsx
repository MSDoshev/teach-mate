import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  Tooltip,
} from "recharts";

type IncomeProps = {
  incomeData: Array<{ name: string; uv: number; pv: number; amt: number }>;
};

export default function IncomeChart({ incomeData }: IncomeProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-[500px] max-h-[600px]">
      <h2 className="text-xl font-semibold mb-4">Приходи за месец</h2>

      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={incomeData} margin={{ top: 20 }}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number) => `$${value}`}
              labelFormatter={(label: string) => `За месец: ${label}`}
            />
            <Bar dataKey="uv" fill="#77CBDA" activeBar={{ fill: "#2A9D8F" }}>
              <LabelList
                dataKey="uv"
                position="top"
                formatter={(value: number) => `$${value}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
