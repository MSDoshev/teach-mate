import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CountUp from "react-countup";
import LessonsChart from "./lessonsChart";
import UsersChart from "./UsersChart";

export default function AdminDashboard() {
  const usersData = [
    { name: "Седмица 1", Teachers: 4000, Students: 2400 },
    { name: "Седмица 2", Teachers: 3000, Students: 1398 },
    { name: "Седмица 3", Teachers: 2000, Students: 9800 },
    { name: "Седмица 4", Teachers: 2780, Students: 3908 },
    // { name: "Седмица 5", Teachers: 1890, Students: 4800 },
    // { name: "Седмица 6", Teachers: 2390, Students: 3800 },
    // { name: "Седмица 7", Teachers: 3490, Students: 4300 },
  ];

  const lessonData = [
    { name: "Bulgarian Language", value: 400 },
    { name: "Mathematics", value: 300 },
    { name: "Physics", value: 300 },
    { name: "Chemistry", value: 200 },
    { name: "English Language", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#689e53"];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-700 text-white p-6">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        {/* Users Statistics */}
        <div className="flex flex-wrap gap-3 mb-10">
          <UsersChart usersData={usersData} />

          {/* Lessons Statistics */}
          <LessonsChart lessonData={lessonData} />
        </div>
      </main>
    </div>
  );
}
