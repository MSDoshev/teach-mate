import Dropdown from "../../components/Dropdown.tsx";
import InputField from "../../components/InputField.tsx";
import PrimaryButton from "../../components/PrimaryButton.tsx";
import { disciplines, provinces } from "../../utils/constants.ts";
import homeImage from "../../assets/home-image.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1440px] pt-32 w-full flex flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[38px] w-[450px] leading-[45px]">
            Find your <span className="text-[#e9c46a]">tutor</span> and book a{" "}
            <span className="text-[#e9c46a]">private lesson</span>!
          </h1>
          <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[18px]">Find tutor</h3>

          <form action="">
            <div className="flex flex-col gap-4">
              <Dropdown classes =""arr={disciplines} defaultValue="Choose subject" />
              <Dropdown classes="" arr={provinces} defaultValue="Choose province" />
              <InputField classes="" placeholder="Search by tutor name" />
              <PrimaryButton classes="ml-auto" text="Search" />
            </div>
          </form></div>
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
