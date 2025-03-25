import DayOfCalendar from "./DayOfCalendar";

export default function DailyBookingSchedule() {
  return (
    <>
      <div className="grid grid-rows-3 max-w-[800px]">
        <div className="flex flex-row overflow-x-scroll gap-[10px]">
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
          <DayOfCalendar />
        </div>
      </div>
    </>
  );
}
