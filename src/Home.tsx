import Dropdown from "./components/Dropdown.tsx";
import InputField from "./components/InputField.tsx";
import PrimaryButton from "./components/PrimaryButton.tsx";
import { disciplines, provinces } from "./utils/constants.ts";
import homeImage from "./assets/home-image.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1440px] pt-32 w-full flex flex-row items-center justify-between gap-10">
        <div className="">
          <h1 className="font-bold text-[38px] w-[450px]">
            Find your <span className="text-[#e9c46a]">tutor</span> and book a{" "}
            <span className="text-[#e9c46a]">private lesson</span>!
          </h1>
          <h3 className="font-semibold text-[18px]">Find tutor</h3>

          <form action="">
            <div className="flex flex-col gap-4">
              <Dropdown arr={disciplines} defaultValue="Choose subject" />
              <Dropdown arr={provinces} defaultValue="Choose province" />
              <InputField placeholder="Search by tutor name" />
              <PrimaryButton text="Search" />
            </div>
          </form>
        </div>

        <img
          src={homeImage}
          alt="Home"
          className="max-w-[500px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
