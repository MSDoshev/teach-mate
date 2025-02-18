import Dropdown from "./components/Dropdown.tsx";
import InputField from "./components/InputField.tsx";
import { disciplines, provinces } from "./utils/constants.ts";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="font-bold text-[40px] text-center">Find your tutor and book a private lesson</h1>
        <h3 className="font-semibold text-[25px]">Find tutor</h3>

        <form action="">
          <div className="flex flex-col gap-[8px]">            

            <Dropdown arr={disciplines} defaultValue="Choose subject"/>
            <Dropdown arr={provinces} defaultValue="Choose province"/>
            <InputField placeholder="Search by tutor name"/>
          </div>
        </form>
      </div>
    </>
  );
}
