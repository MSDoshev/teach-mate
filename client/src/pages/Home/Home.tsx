import Dropdown from "../../components/Dropdown.tsx";
import InputField from "../../components/InputField.tsx";
import PrimaryButton from "../../components/PrimaryButton.tsx";
import { disciplines, provinces } from "../../utils/constants.ts";
import homeImage from "../../assets/home-image.png";
import Card from "../../components/Card.tsx";
import mathIcon from "../../assets/math-book.png";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
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
                <Dropdown
                  classes=""
                  arr={disciplines}
                  defaultValue="Choose subject"
                />
                <Dropdown
                  classes=""
                  arr={provinces}
                  defaultValue="Choose province"
                />
                <InputField classes="" placeholder="Search by tutor name" />
                <PrimaryButton classes="ml-auto" text="Search" />
              </div>
            </form>
          </div>
        </div>

        <img
          src={homeImage}
          alt="Home"
          className="max-w-[500px] h-auto object-cover"
        />
      </div>

      <div className="max-w-[900px] flex flex-col items-center ">
        <h2 className="w-full flex items-start text-[30px] font-semibold">Popular Subjects</h2>
        <div className="flex-wrap w-full flex items-center py-5 gap-5"> 
          <Card image={mathIcon} subject="Maths" classes="bg-[#FCA88F]"/>
          <Card image={mathIcon} subject="Bulgarian" classes="bg-[#FF9F80]"/>
          <Card image={mathIcon} subject="Geography" classes="bg-[#8BC7A5]"/>
          <Card image={mathIcon} subject="History" classes="bg-[#D4A055]"/>
          <Card image={mathIcon} subject="Biology" classes="bg-[#7A8755]"/>
          <Card image={mathIcon} subject="Chemistry" classes="bg-[#EFE7DA]"/>
          <Card image={mathIcon} subject="Physics" classes="bg-[#E9C46A]"/>
          <Card image={mathIcon} subject="English" classes="bg-[#FFF5E1]"/>
          <Card image={mathIcon} subject="German" classes="bg-[#D88283]"/>
          <Card image={mathIcon} subject="IT" classes="bg-[#F8E0C6]"/>   
        </div>
      </div>
    </div>
  );
}
