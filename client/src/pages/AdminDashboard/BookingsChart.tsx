type BookingProps = {
  bookingsData: Array<{ city: string; bookings: number}>;
};

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  ResponsiveContainer,
} from "recharts";

export default function BookingsChart({ bookingsData }: BookingProps) {
  const sortedData = [...bookingsData].sort((a, b) => b.bookings - a.bookings);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-[500px]">
      <h2 className="text-xl font-semibold mb-4">Регистрирани Потребители</h2>

      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ left: 20, right: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal />
            <XAxis type="number" />
            <YAxis dataKey="city" type="category" />
            <Tooltip />
            <Bar
              dataKey="bookings"
              fill="#3B82F6"
              barSize={30}
              label={{ position: "right", fill: "black" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
