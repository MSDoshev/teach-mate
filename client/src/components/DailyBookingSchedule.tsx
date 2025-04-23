import DayOfCalendar from "./DayOfCalendar";

export default function DailyBookingSchedule() {
  return (
    <>
      <div className="flex flex-col gap-[10px] max-w-[800px] shadow-md rounded-lg px-[50px] py-[10px]">
        <h2 className="font-bold text-[25px]">Запази урок</h2>
        <div className="flex flex-col">
          <h2 className="font-bold text-[#ff9f80] ">Учебен център "Знание"</h2>
          <h3 className="pb-[20px]">Хасково, бул. "България" 20</h3>
          <div className="flex flex-row overflow-x-scroll gap-[10px] border-t-[1px] pt-[30px]">
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
      </div>
    </>
  );
}
