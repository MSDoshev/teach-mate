import Dropdown from "./components/Dropdown.tsx";
import InputField from "./components/InputField.tsx";
import PrimaryButton from "./components/PrimaryButton.tsx";
import { disciplines, provinces } from "./utils/constants.ts";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px]">
        <h1 className="font-bold text-[40px] text-center">Find your <span className="text-[#e9c46a]">tutor</span> and book a <span className="text-[#e9c46a]">private lesson</span>!</h1>
        <h3 className="font-semibold text-[25px]">Find tutor</h3>

        <form action="">
          <div className="flex flex-col gap-[8px]">            

            <Dropdown arr={disciplines} defaultValue="Choose subject"/>
            <Dropdown arr={provinces} defaultValue="Choose province"/>
            <InputField placeholder="Search by tutor name"/>
            <PrimaryButton text="Search"/>
          </div>
        </form>
      </div>
    </>
  );
}
