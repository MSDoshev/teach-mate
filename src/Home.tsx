import { provinces } from "./utils/constants.ts";

export default function Home() {
  return (
    <>
      <div>
        <h1>Find your tutor and book a private lesson</h1>
        <h3>Find tutor</h3>

        <form action="">
          <div className="flex flex-col">
            <label htmlFor="provinces">Choose your province</label>

            <select name="provinces">
              {provinces.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
