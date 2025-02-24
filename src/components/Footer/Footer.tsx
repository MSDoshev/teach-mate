import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex w-full bg-[#fff5e1] mt-auto p-10 items-center justify-center">
      <div className="max-w-[1440px] w-full flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">For TeachMate</h3>
          <ul>
            <Link to="#">What is TeachMate?</Link>
            <Link to="#">Become a Teacher</Link>
            <Link to="#">FAQ</Link>
            <Link to="#">Terms of use</Link>
            <Link to="#">Contacts</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Subjects</h3>
          <ul>
            <Link to="#">Mathematics</Link>
            <Link to="#">Bulgarian language</Link>
            <Link to="#">English language</Link>
            <Link to="#">German language</Link>
            <Link to="#">French language</Link>
            <Link to="#">Spanish language</Link>
            <Link to="#">History</Link>
            <Link to="#">Geography</Link>
            <Link to="#">Biology</Link>
            <Link to="#">Chemistry</Link>
            <Link to="#">Physics</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Cities</h3>
          <ul>
            <Link to="#">Plovdiv</Link>
            <Link to="#">Sofia</Link>
            <Link to="#">Varna</Link>
            <Link to="#">Asenovgrad</Link>
            <Link to="#">Blagoevgrad</Link>
            <Link to="#">Burgas</Link>
            <Link to="#">Veliko Tarnovo</Link>
            <Link to="#">Dobrich</Link>
            <Link to="#">Kardzhali</Link>
            <Link to="#">Pazardzhik</Link>
            <Link to="#">All cities</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Contact Info</h3>
          <ul>
            <Link to="#">Address: #123 Some Street, Somewhere, 12345</Link>
            <Link to="#">Email: somemail@mail.com</Link>
            <Link to="#">Phone: +1234567890</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
