export default function Header() {
  return (
    <div className="bg-[#ff9f80] h-[60px] flex flex-row items-center justify-between px-10">
      <div className=" text-[#fff5e1] font-bold text-2xl hover:text-[#d88366] cursor-pointer">
        TeachMate
      </div>
      <ul className="flex flew-row items-center gap-8 text-[#fff5e1] font-semibold text-lg">
        <li className="hover:bg-[#d88366] px-6 py-4 cursor-pointer">About us</li>
        <li className="hover:bg-[#d88366] px-6 py-4 cursor-pointer">Blog</li>
        <li className="hover:bg-[#d88366] px-6 py-4 cursor-pointer">Blog</li>
      </ul>
      <div className="font-medium text-lg text-[#fff5e1] hover:text-[#d88366] cursor-pointer">Login </div>
    </div>
  );
}
