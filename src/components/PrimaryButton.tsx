type PrimaryButtonProps = {
  text: string;
};
export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return <button className="text-[20px] font-semibold rounded-md shadow-md w-fit bg-[#2a8d6f]  text-[#ffffff] py-[15px] px-[20px] ">{text}</button>;
}
