import BookingsChart from "./BookingsChart";
import IncomeChart from "./IncomeChart";
import LessonsChart from "./LessonsChart";
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
    { name: "Български", value: 400 },
    { name: "Математика", value: 300 },
    { name: "Физика", value: 300 },
    { name: "Химия", value: 200 },
    { name: "Английски", value: 200 },
  ];

  const incomeData = [
    {
      name: "Януари",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Февруари",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Март",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Април",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Май",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Юни",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Юли",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const bookingsData = [
    { city: "New York", bookings: 450 },
    { city: "Los Angeles", bookings: 350 },
    { city: "Chicago", bookings: 275 },
    { city: "Houston", bookings: 200 },
    { city: "Miami", bookings: 125 },
  ];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-700 text-white p-6">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        <div className="flex flex-wrap gap-3 mb-10">
          {/* Users Statistics */}
          <UsersChart usersData={usersData} />

          {/* Lessons Statistics */}
          <LessonsChart lessonData={lessonData} />

          <IncomeChart incomeData={incomeData} />

          {/* Bookings Statistics */}
          <BookingsChart bookingsData={bookingsData} />
        </div>
      </main>
    </div>
  );
}
