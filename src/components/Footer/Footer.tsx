import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex w-full bg-[#fff5e1] mt-auto p-10 items-center justify-center">
      <div className="max-w-[1440px] w-full flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">For TeachMate</h3>
          <ul>
            <li><Link to="#">What is TeachMate?</Link></li>
            <li><Link to="#">Become a Teacher</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">Terms of use</Link></li>
            <li><Link to="#">Contacts</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Subjects</h3>
          <ul>
            <li><Link to="#">Mathematics</Link></li>
            <li><Link to="#">Bulgarian language</Link></li>
            <li><Link to="#">English language</Link></li>
            <li><Link to="#">German language</Link></li>
            <li><Link to="#">French language</Link></li>
            <li><Link to="#">Spanish language</Link></li>
            <li><Link to="#">History</Link></li>
            <li><Link to="#">Geography</Link></li>
            <li><Link to="#">Biology</Link></li>
            <li><Link to="#">Chemistry</Link></li>
            <li><Link to="#">Physics</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Cities</h3>
          <ul>
            <li><Link to="#">Plovdiv</Link></li>
            <li><Link to="#">Sofia</Link></li>
            <li><Link to="#">Varna</Link></li>
            <li><Link to="#">Asenovgrad</Link></li>
            <li><Link to="#">Blagoevgrad</Link></li>
            <li><Link to="#">Burgas</Link></li>
            <li><Link to="#">Veliko Tarnovo</Link></li>
            <li><Link to="#">Dobrich</Link></li>
            <li><Link to="#">Kardzhali</Link></li>
            <li><Link to="#">Pazardzhik</Link></li>
            <li><Link to="#">All cities</Link> </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Contact Info</h3>
          <ul>
            <li><Link to="#">Address: #123 Some Street, Somewhere, 12345</Link></li>
            <li><Link to="#">Email: somemail@mail.com</Link></li>
            <li><Link to="#">Phone: +1234567890</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
