import DayOfCalendar from "./DayOfCalendar";

export default function DailyBookingSchedule() {
  return (
    <>
      <div className="flex flex-col px-[100px] max-w-[1100px]">

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
