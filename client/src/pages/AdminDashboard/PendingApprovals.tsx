type ApprovalsProps = {
    approvalsData: Array<{ city: string; bookings: number }>;
  };

import CountUp from "react-countup";


export default function PendingApprovals() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full min-w-[150px]">
      <h2 className="text-xl font-semibold mb-4">Чакащи одобрение</h2>
      <h3 className="text-3xl font-bold">
        <CountUp start={0} end={25} duration={1.3} separator="," />
      </h3>
    </div>
  );
}
