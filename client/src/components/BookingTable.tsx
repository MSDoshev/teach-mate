import { useState } from "react";

// Placeholder lesson hours for the booking table test purposes
const weekdayHours = ["15:00", "17:00", "19:00"];
const weekendHours = ["10:00", "13:00", "15:00", "17:00", "19:00"];

// Generating the next 14 days
const generateDates = () => {
  const dates = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + i);

    // Formatting the date in Sofia, Bulgaria timezone
    const formattedDate = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Sofia",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .format(date)
      .split("/")
      .reverse()
      .join("-");
    dates.push(formattedDate);
  }
  return dates;
};

export default function BookingTable() {
  const allDates = generateDates();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Placeholder for bookings: this would be replaced by data from the database later
  const [bookings, setBookings] = useState<{ [key: string]: string[] }>({
    // Example placeholder data (simulate some dates already booked)
    "2025-03-22": ["15:00", "17:00"], 
    "2025-03-23": ["13:00", "19:00"]
  });

  // Show only 3 days at a time
  const visibleDates = allDates.slice(currentIndex, currentIndex + 3);

  // Get lesson hours based on the day of the week
  const getLessonHours = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long", timeZone: "Europe/Sofia" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(new Date(date));

    // Return weekend hours on Saturday and Sunday, otherwise weekday hours
    return dayOfWeek === "Saturday" || dayOfWeek === "Sunday" ? weekendHours : weekdayHours;
  };

  // Handle booking a lesson (this is just a placeholder for now)
  const bookLesson = (date: string, time: string) => {
    setBookings((prev) => ({
      ...prev,
      [date]: prev[date] ? [...prev[date], time] : [time],
    }));
  };

  return (
    <>
      <div className="ml-5 w-[50%]">
        <h2 className="text-[25px] font-bold text-center text-[#2a9d8f]">Запази урок</h2>
        <table className="table-auto w-full bg-white border-[5px] border-[#2a9d8f]" >
          <thead className="bg-[#2a9d8f] text-white text-[20px]">
            <tr>
              {visibleDates.map((date) => (
                <th className="px-4 py-2"key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleDates.map((date) => {
              const lessonHours = getLessonHours(date); // Get the specific lesson hours for this date
              return lessonHours.map((time) => (
                <tr key={time}>
                  {visibleDates.map((visibleDate) => (
                    <td className="text-[20px] text-center font-semibold border border-gray-300 px-8 py-5" key={visibleDate}>
                      {bookings[visibleDate]?.includes(time) ? (
                        <span>Запазено</span> // Placeholder text for booked slots
                      ) : (
                        <button onClick={() => bookLesson(visibleDate, time)}>Запази {time}</button>
                      )}
                    </td>
                  ))}
                </tr>
              ));
            })}
          </tbody>
        </table>

        <div>
          <button className="text-center text-white font-semibold text-[20px] border-[3px] px-4 py-2 mt-4 rounded-xl bg-[#2a9d8f]" disabled={currentIndex === 0} onClick={() => setCurrentIndex((prev) => prev - 1)}>
            Previous
          </button>
          <button className="text-center text-white font-semibold text-[20px] border-[3px] px-4 py-2 mt-4 rounded-xl bg-[#2a9d8f] float-right"
            disabled={currentIndex + 3 >= allDates.length}
            onClick={() => setCurrentIndex((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
