export default function Footer() {
  return (
    <div className="flex w-full bg-[#fff5e1] mt-auto p-10 items-center justify-center">
      <div className="max-w-[1440px] w-full flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">For TeachMate</h3>
          <ul>
            <li>What is TeachMate?</li>
            <li>Become a Teacher</li>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Subjects</h3>
          <ul>
            <li>Mathematics</li>
            <li>Bulgarian language</li>
            <li>English language</li>
            <li>German language</li>
            <li>French language</li>
            <li>Spanish language</li>
            <li>History</li>
            <li>Geography</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Cities</h3>
          <ul>
            <li>Plovdiv</li>
            <li>Sofia</li>
            <li>Varna</li>
            <li>Asenovgrad</li>
            <li>Blagoevgrad</li>
            <li>Burgas</li>
            <li>Veliko Tarnovo</li>
            <li>Dobrich</li>
            <li>Kardzhali</li>
            <li>Pazardzhik</li>
            <li>All cities</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Contact Info</h3>
          <ul>
            <li>Address: #123 Some Street, Somewhere, 12345</li>
            <li>Email: somemail@mail.com</li>
            <li>Phone: +1234567890</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
