type UsersProps = {
  usersData: Array<{ name: string; Students: number; Teachers: number }>;
};

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CountUp from "react-countup";

export default function UsersChart({ usersData }: UsersProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-[500px]">
      <h2 className="text-xl font-semibold mb-4">Регистрирани Потребители</h2>
      <div className="flex gap-6 px-10 justify-between">
        <div className="bg-orange-100 p-4 rounded-lg text-center w-40 shadow">
          <h3 className="text-3xl font-bold">
            <CountUp start={0} end={5320} duration={1.3} separator="," />
          </h3>
          <p>Учители</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg text-center w-40 shadow">
          <h3 className="text-3xl font-bold">
            <CountUp start={0} end={10130} duration={1.3} separator="," />
          </h3>
          <p>Курсисти</p>
        </div>
      </div>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Students" stroke="#E9C46A" name="Курсисти"/>
            <Line type="monotone" dataKey="Teachers" stroke="#2A9D8F" name="Учители"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
